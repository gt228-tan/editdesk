# EditDesk — Client Portal by GT Edits

> The all-in-one client portal designed for video editors, freelance creatives, and creative agencies to simplify communication, project tracking, deliverable approvals, and payment management.

---

## 📌 Overview

**EditDesk** is built to eliminate the chaos of scattered WhatsApp chats, ambiguous client feedback, lost Google Drive links, and delayed milestone payments. 

By integrating **Google Gemini API** for intelligent brief generation & cost estimation alongside **Google Drive API v3** for hands-free asset provisioning, EditDesk unifies the entire client post-production workflow into one transparent dashboard.

---

## ✨ Key Features

- **⚡ AI Brief Planner & Cost Estimation (Google Gemini API)**
  - Automatically translates raw client requirements into structured, unambiguous project briefs.
  - Pinpoints missing technical specifications (aspect ratios, frame rates, audio licensing, source files).
  - Matches client keywords with your agency's predefined rate chart to compute instantaneous quotes and turnaround forecasts.
  - Cuts client onboarding time by up to 60%.

- **📂 Automated Cloud Asset Workspaces (Google Drive API v3)**
  - Automatically provisions dedicated project directory trees (`/Footage_Inputs`, `/Audio_Stems`, `/Drafts_V1_V3`, `/Final_Masters`).
  - Grants clients secure upload-only access to raw assets.
  - Provides a quick-deliverable panel for editors to export and share master cuts without repetitive manual setup.

- **📬 Dual-Role Email & Workflow Notifications**
  - **Admin View:** Centralized management of incoming work requests, timecoded revision tickets, and milestone sign-offs.
  - **Client View:** One-click review of draft cuts, revision submissions, invoice tracking, and download access.

- **🔒 Milestone Approvals & Payment Security**
  - Locks final master uncompressed deliverables until milestone sign-off and payment clearance.
  - Reduces payment delays and scope creep.

---

## 🚀 Live Links & Credentials

- **Live Client Portal:** [gtedits-clientportal.vercel.app](https://gtedits-clientportal.vercel.app/)
- **Presentation Deck (.pptx):** [Download EditDesk.pptx](EditDesk.pptx)
- **Instagram Credentials:** [@gt._.edits](https://instagram.com/gt._.edits)
- **Contact Email:** [gtbtbhay22@gmail.com](mailto:gtbtbhay22@gmail.com)

---

## 🎨 Design System

The landing page follows a clean, editorial SaaS aesthetic crafted with pure Vanilla CSS:
- **Brand Primary:** `#16A34A` (Forest Green)
- **Neutral Canvas:** `#F4F5F6` (Light Clean Gray)
- **Card Surfaces:** `#FFFFFF` (Crisp White with `#E2E8F0` border)
- **Typography:** Outfit (Headings) & Plus Jakarta Sans (Body)
- **Zero Gradients:** Solid, high-contrast, human-crafted layout free of AI gradient slop.

---

## 📁 Project Structure

```text
EditDesk-Explainer/
├── assets/
│   └── images/
│       ├── hero-mockup.jpg               # Dashboard UI preview
│       ├── article-ai-brief.jpg          # Article thumbnail: AI Briefing
│       ├── article-drive-automation.jpg  # Article thumbnail: Drive Automation
│       └── article-revisions-payment.jpg # Article thumbnail: Revisions & Escrow
├── index.html                            # Semantic HTML5 landing page structure
├── style.css                             # Pure Vanilla CSS design system
├── script.js                             # Vanilla JS (navigation, scrollspy, modals)
├── sitedetail.md                         # Product specifications & feature scope
└── README.md                             # Project documentation
```

---

## 🛠️ Getting Started Locally

No complex build steps or dependencies required.

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/gt228-tan/editdesk.git
   cd editdesk
   ```

2. **Open the project in your browser:**
   - Double-click `index.html` to open it directly in any modern browser.
   - Or serve using any static server:
     ```bash
     # Using Python
     python -m http.server 3000

     # Using Node / npx
     npx serve .
     ```

---

## 🔮 Future Roadmap

- [ ] **Multi-Team Agency Workspaces:** Granular role permissions and multi-editor assignment.
- [ ] **AI Financial Analytics:** Predictive studio revenue tracking and project margin calculations.
- [ ] **Automated Payment Reminders:** Custom email and SMS notifications before due dates.
- [ ] **Real-Time In-Portal Chat:** Live messaging between client and assigned editor with video timecode pins.
- [ ] **Google Auth & 2FA:** One-click Google OAuth authentication and two-factor asset security.

---

## 📄 License & Credits

Developed with ❤️ by **GT Edits** &copy; 2026. All rights reserved.
