# Lead Gen Engine: Precision B2B Prospecting via Geospatial Grids 🚀

This repository showcases a high-performance data engineering solution designed to automate high-quality B2B lead generation. Unlike standard scraping tools, this engine utilizes a **Geospatial Grid Search** system to maximize geographic coverage and a custom **Scoring Engine** to identify the most valuable points of contact.

## ⚙️ Key Features

* **Geospatial Grid Segmentation:** The system subdivides target cities into dynamic grids (4, 9, or 16 zones). This bypasses Google Places API result limits, ensuring 100% area coverage.
* **Database Validation (Anti-Duplication):** Before processing, the workflow cross-references results with a **Baserow (PostgreSQL)** database. This optimizes API costs and prevents duplicate outreach.
* **Deep Web Scraping:** Automatically identifies corporate websites and extracts contact emails, featuring advanced logic to decode Cloudflare-obfuscated addresses and clean HTML entities.
* **Commercial Relevance Scoring:** A custom JavaScript algorithm categorizes emails in real-time. It prioritizes decision-makers (e.g., "management", "owner") over generic addresses (e.g., "info"), ensuring high-impact delivery.

## 🛠️ Tech Stack
* **Orchestration:** n8n.
* **Database / CRM:** Baserow (PostgreSQL).
* **APIs:** Google Places API (New TextSearch).
* **Languages:** JavaScript (Custom extraction & scoring logic).

## 📊 Process Visualization

### 1. Workflow Orchestration
The end-to-end flow manages everything from coordinate retrieval to the final insertion of qualified leads.
![n8n Workflow Mastery](img/workflow_capture.jpg)

### 2. Geospatial Intelligence
Database configuration for grid-based division (Example: Ciudad Real, Spain).
![Coordinate Grid Setup](img/grid_setup.jpg)

### 3. Final Output: Enriched Leads
The final result: leads with verified websites, exact locations, and ranked contact emails.
![Generated Lead Data](img/leads_results.jpg)

## 🚀 Future Roadmap & Scalability
* **Automated Outreach Integration:** Native Webhook connection to Cold Email platforms (like Instantly.ai or Lemlist) to trigger sequences the moment a high-relevance lead is detected.
* **Tech-Stack Detection:** Implementing a "Technographic" scanner to identify specific software or tracking pixels (e.g., Facebook Pixel) used by the business to further refine the sales pitch.

---
*Note: This project is part of a professional automation suite designed to bridge the gap between raw data and actionable sales opportunities.*
