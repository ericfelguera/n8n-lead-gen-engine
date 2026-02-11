/**
 * Lead Scoring & Categorization Engine
 * * Logic: Assigns a relevance score (1-5) based on keywords in the email string.
 * High priority: Sales, Management, Owners.
 * Low priority/Penalization: HR, Billing, No-reply, Generic providers.
 */

const catRules = [
  { re: /(sales|comercial|ventas|b2b)/i, category: "Sales/Commercial", base: 5 },
  { re: /(direccion|director|gerencia|manager|gm|owner|ceo)/i, category: "Management/Executive", base: 5 },
  { re: /(reservas?|booking)/i, category: "Booking", base: 4 },
  { re: /(marketing|pr|press)/i, category: "Marketing/PR", base: 3 },
  { re: /(info|contacto|hello|hola)/i, category: "General Inquiries", base: 3 },
];

const penalize = [
  { re: /(no-?reply|noreply)/i, points: -4, reason: "No-reply address" },
  { re: /(hr|rrhh|jobs|careers)/i, points: -3, reason: "Human Resources" },
  { re: /(billing|invoices?|facturas?)/i, points: -2, reason: "Accounting/Billing" },
];

function scoreEmail(email) {
  let best = { category: "General", score: 2, reason: "No strong signal" };
  
  // Categorization logic
  for (const r of catRules) {
    if (r.re.test(email)) {
      best = { category: r.category, score: r.base, reason: `Matched ${r.category}` };
      break;
    }
  }
  
  // Penalization logic
  for (const p of penalize) {
    if (p.re.test(email)) {
      best.score += p.points;
      best.reason += `; Penalized: ${p.reason}`;
    }
  }

  // Generic provider check (Gmail, Hotmail, etc.)
  const isGeneric = /@(gmail|hotmail|outlook|yahoo)\./i.test(email);
  best.score += isGeneric ? -1 : 1;

  // Clamp score between 1 and 5
  const relevance = Math.max(1, Math.min(5, best.score));
  return { email, category: best.category, relevance, reason: best.reason };
}
