# EditDesk — Client Portal & Creative Operations Hub by GT Edits

> A modern, full-stack client portal and creative operations management platform designed for video editing studios, agencies, and freelance creatives to streamline communication, project tracking, deliverable approvals, and automated billing.

---

## 📌 Overview

**EditDesk** replaces the friction of scattered WhatsApp chats, ambiguous client feedback, lost Google Drive links, and delayed milestone payments with a unified, high-performance workspace.

By combining **Google Gemini AI** and **browser-native Voice Dictation** for instant brief scoping, **Google Drive API v3** for hands-free asset provisioning, **Brevo API** for high-deliverability transactional emails, and an interactive **Invoicing & PDF Engine**, EditDesk powers the entire client post-production workflow end-to-end.

---

## ✨ Key Features

### 🎙️ AI Brief Planner & Voice Dictation (Google Gemini AI)
- **Speech-to-Text Input:** Built-in microphone voice dictation powered by browser Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`).
- **Automated Technical Scoping:** Parses raw client prompts and pinpoints missing specs (aspect ratios, frame rates, color profiles, audio stems, source files).
- **Predefined Rate-Chart Costing:** Matches project keywords against custom studio pricing cards to calculate instant quotes and turnaround estimates.
- **Triage to Project:** Admins can approve incoming client requests directly into active projects with a single click.

### 📂 Automated Cloud Asset Workspaces (Google Drive API v3)
- **Zero-Touch Provisioning:** Automatically generates standardized client directory trees (`/Footage_Inputs`, `/Audio_Stems`, `/Drafts_V1_V3`, `/Final_Masters`).
- **Flexible Authentication:** Supports Service Account JSON strings (ideal for cloud serverless environments like Render & Vercel), service account files, environment variables, or OAuth2.
- **Quick-Deliverables Panel:** Pre-filled client Drive URLs and upload links for swift asset export and client sharing.

### 🧾 Invoicing & Vector PDF Billing Suite
- **Interactive Invoice Builder (`InvoiceGeneratorModal`):**
  - Sequential invoice numbering (`#001`, `#002`, etc.).
  - Multi-item line entry: Description, Quantity, Unit Rate, and automated row totals.
  - Dynamic financial math: Subtotal, Discount, Tax/GST %, Advance deductions, and Remaining Balance Due (`Math.max(0, amt - adv)`).
  - Persistent bank details (Account Name, Account Number, IFSC, Bank Name, Branch) and Digital Signature uploads saved across sessions.
- **Live Invoice Preview (`InvoicePreviewModal`):** Realistic in-app preview matching official printed invoices prior to dispatch.
- **Branded Vector PDF Downloads (`jspdf` + `jspdf-autotable`):** Clean, professional PDF generation formatted in `Rs.` with bank tables and digital signatures.
- **One-Click "Mark as Paid":** Toggle payment status directly from the project tracker or dedicated invoice hub.

### 📬 High-Deliverability Transactional Emails (Brevo API)
- **Direct-to-Inbox Delivery:** Powered by official Brevo REST API (`@getbrevo/brevo` v6) engineered to bypass spam and promotions folders.
- **Automated Trigger Events:**
  - **New Deliverable Upload:** Notification with one-click portal review button.
  - **Request Approved / Rejected:** Client notification with admin feedback notes.
  - **Payment & Invoice Reminders:** Formal notice with the generated **Invoice PDF attached as a Base64 buffer**.
  - **Admin Alerts:** Instant notification when a client submits a brief or requests revisions.

### 📊 Tabbed Admin Command Center
- **📊 Dashboard:** High-level metrics, active project counters, total revenue, and a slide-out **Overdue Tasks Drawer**.
- **👥 Clients:** Client directory, one-click credential generation popup (`CredentialModal`), and direct links to provisioned Drive folders.
- **📁 Projects:** Master project tracker with budget editing, client association, deliverable hub, and "Mark as Paid" toggles.
- **📥 Requests:** Triage incoming client briefs, inspect AI scoping/cost estimations, and approve or decline with notes.
- **🧾 Invoices:** Dedicated invoice hub with search (by # or client name), status filters (`All`, `Pending`, `Paid`), financial metrics (Total Billed, Total Collected, Total Pending), live preview, editing, and deletion.

### 🎬 Interactive Deliverables Hub & Revisions
- **In-Browser Review Player:** Video and image preview with playback controls, watermarking indicators, and version tracking.
- **Itemized Revision Checklists:** Clients submit timestamped markers directly against specific deliverable versions.
- **Embedded Calendly Sync:** Integrated one-click meeting scheduling for client-editor sync calls.
- **Milestone Protection:** Unlocks master uncompressed download access only upon milestone sign-off and payment clearance.

### 🌓 Adaptive Dark & Light Theme Engine
- Seamless theme switching engineered for dim color-grading suites and bright client offices.
- Mobile-compact pill toggle controls with persistent theme preferences.

---

## 🛠️ Tech Stack & Architecture

### Production Client Portal (`gtclientportal`)
- **Frontend SPA:** React 18, Vite 5, React Router DOM v6, CSS Variables Theme Engine, `jspdf`, `jspdf-autotable`, Web Speech API.
- **Backend Service:** Node.js, Express 5, MongoDB Atlas (Mongoose ODM v9), Firebase Admin SDK.
- **Authentication & Realtime State:** Firebase Auth & Firebase Realtime Database.
- **AI Engine:** Google Gemini API (`@google/genai` v2 & `@google/generative-ai` v0.24).
- **Cloud Storage:** Google APIs (`googleapis` Drive API v3).
- **Transactional Email:** Brevo REST API (`@getbrevo/brevo` v6).
- **Deployment:** Vercel (Frontend SPA) + Render (Backend Express Web Service).

### Explainer & Landing Website (`EditDesk-Explainer`)
- **Structure:** Semantic HTML5 (`index.html`).
- **Styling:** Pure Vanilla CSS Design System (`style.css`), high-contrast editorial SaaS aesthetic (#16A34A Forest Green & #F4F5F6 Neutral Canvas).
- **Interactivity:** Vanilla JavaScript (`script.js`) with responsive drawer, scrollspy, and modal dialogs.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                             Client Browser                             │
│       (React 18 + Vite SPA • Dark/Light Engine • Speech-to-Text)       │
└──────────────┬─────────────────────────┬───────────────────────────────┘
               │                         │
      Firebase Auth & RTDB        REST API Requests
  (Users, Clients & Invoices)            │
               │                         ▼
               ▼              ┌──────────────────────────────────────────┐
    ┌──────────────────────┐  │              Express Server              │
    │   Firebase Backend   │  │          (Node.js + Middleware)          │
    │  • Auth Sessions     │  └──────┬───────────┬───────────┬───────────┘
    │  • Realtime Data     │         │           │           │
    │  • Client Invoices   │         │           │           │
    └──────────────────────┘         ▼           ▼           ▼
                         ┌──────────────┐ ┌──────────────┐ ┌─────────────┐
                         │   MongoDB    │ │  Brevo API   │ │Google Gemini│
                         │   Atlas      │ │ (Inbox Email │ │  AI Planner │
                         │  (Projects & │ │ & Invoices)  │ └─────────────┘
                         │Deliverables) │ └──────────────┘
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │ Google Drive │
                         │   API (v3)   │
                         └──────────────┘
```

---

## 🚀 Live Links & Credentials

- **Live Client Portal:** [gtedits-clientportal.vercel.app](https://gtedits-clientportal.vercel.app/)
- **Presentation Deck (.pptx):** [Download EditDesk.pptx](EditDesk.pptx)
- **Instagram Credentials:** [@gt._.edits](https://instagram.com/gt._.edits)
- **Contact Email:** [gtbtbhay22@gmail.com](mailto:gtbtbhay22@gmail.com)

---

## 📁 Repository Structure

```text
EditDesk-Explainer/
├── assets/
│   └── images/
│       ├── hero-mockup.jpg               # Dashboard UI preview
│       ├── article-ai-brief.jpg          # Article thumbnail: AI Briefing
│       ├── article-drive-automation.jpg  # Article thumbnail: Drive Automation
│       └── article-revisions-payment.jpg # Article thumbnail: Revisions & Escrow
├── index.html                            # Explainer landing page (Semantic HTML5)
├── style.css                             # Design system & responsive layout (Vanilla CSS)
├── script.js                             # Interactive navigation & modals (Vanilla JS)
├── EditDesk.pptx                         # Project presentation deck
├── sitedetail.md                         # Original feature scope
├── updated_details.md                    # Comprehensive full-stack portal documentation
└── README.md                             # Project overview & architectural guide
```

---

## 🛠️ Getting Started Locally (Explainer Landing Page)

No build tools or heavy package dependencies required for the explainer website.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gt228-tan/editdesk.git
   cd editdesk
   ```

2. **Open in browser:**
   - Double-click `index.html` to open directly in any modern browser.
   - Or serve with any static web server:
     ```bash
     # Using Python 3
     python -m http.server 3000

     # Using Node / npx
     npx serve .
     ```

---

## 🔮 Roadmap & Release Status

- [x] **Automated Payment Reminders:** Dispatches formal notices with attached PDF invoices via Brevo API (`POST /api/deliverables/:deliverableId/remind-payment`).
- [x] **Microphone Voice Dictation:** Client speech-to-text brief drafting via Web Speech API.
- [x] **Sequential Invoicing & Branded PDF Engine:** Custom invoice builder, bank details, signatures, and instant vector PDF downloads.
- [x] **Tabbed Admin Control Center:** Clean 5-tab workflow with overdue deliverable triage.
- [ ] **Multi-Team Agency Workspaces:** Granular role permissions, multi-editor project assignment, and team revenue splitting.
- [ ] **AI Financial Analytics & Margin Reporting:** Predictive studio revenue tracking, project margin calculations, and editor capacity metrics.
- [ ] **Real-Time In-Portal Chat:** Live messaging between client and assigned editor with video timecode pins.
- [ ] **Google OAuth & 2FA:** One-click Google authentication and mandatory two-factor asset security.
- [ ] **WhatsApp Business Webhook Sync:** Automated two-way milestone and delivery alerts via WhatsApp.

---

## 📄 License & Credits

Developed with ❤️ by **Tanishq Mehta — GT Edits** &copy; 2026. All rights reserved.
