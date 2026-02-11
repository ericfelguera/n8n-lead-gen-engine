/**
 * Advanced HTML Email Extractor
 * * Logic: Extracts emails from raw HTML strings, including de-obfuscation 
 * for Cloudflare [email protected] protections and HTML entity cleaning.
 */

// Decodes Cloudflare obfuscated email strings
function decodeCfEmail(hex) {
  const r = parseInt(hex.slice(0, 2), 16);
  let out = '';
  for (let i = 2; i < hex.length; i += 2) {
    out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ r);
  }
  return out;
}

// Main extraction function
function extractEmails(html) {
  const found = new Set();
  
  // 1. Cloudflare de-obfuscation search
  const cfMatches = html.matchAll(/data-cfemail="([0-9a-fA-F]+)"/g);
  for (const m of cfMatches) {
    found.add(decodeCfEmail(m[1]).toLowerCase().trim());
  }

  // 2. Standard Regex Pattern for plain text emails
  const emailPattern = /[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\.[a-z]{2,}/gi;
  const standardMatches = html.match(emailPattern) || [];
  standardMatches.forEach(e => found.add(e.toLowerCase().trim()));

  return [...found];
}
