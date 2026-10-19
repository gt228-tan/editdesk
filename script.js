/**
 * EditDesk Landing Page - Interactive Script
 * Powered by GT Edits
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Element Selectors ---
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const articleModal = document.getElementById('articleModal');
  const closeArticleModal = document.getElementById('closeArticleModal');
  const articleBtns = document.querySelectorAll('.article-link-btn');
  const ctaForm = document.getElementById('ctaForm');
  const ctaEmailInput = document.getElementById('ctaEmailInput');
  const ctaFeedback = document.getElementById('ctaFeedback');
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // --- 1. Sticky Navbar on Scroll ---
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // --- 2. Mobile Menu Drawer Toggle ---
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 3. ScrollSpy & Navigation Active State ---
  const scrollSpy = () => {
    const scrollPosition = window.scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', scrollSpy, { passive: true });

  // --- 4. Smooth Anchor Scrolling with Navbar Offset ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- 5. Back to Top Smooth Scroll ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 6. Related Articles Database & Modal Reader ---
  const articleData = {
    1: {
      badge: "AI & Automation",
      title: "How AI Briefing Cuts Video Post-Production Overhead by 60%",
      readTime: "5 min read &bull; Google Gemini API",
      content: `
        <div class="article-full-content">
          <p>One of the biggest bottlenecks for freelance video editors and creative post houses is poorly defined client requirements. Clients frequently describe their needs in vague terms like <em>"make it modern and fast-paced"</em> without specifying resolution, aspect ratios, sound licensing, or expected deliverables.</p>
          
          <h4>The Gemini API Solution in EditDesk</h4>
          <p>EditDesk integrates Google Gemini API directly into the client onboarding pipeline:</p>
          <ul>
            <li><strong>Automated Gap Detection:</strong> The AI prompts clients with intelligent follow-up questions regarding missing assets (e.g. logos with transparent alpha channels, B-roll reels, font guidelines).</li>
            <li><strong>Keyword-Matched Cost Estimation:</strong> Keywords such as "4K color grading," "3D motion graphics," and "sound mix" are cross-referenced with your studio's custom rate card to output a precise quote instantly.</li>
            <li><strong>Timeline Forecasting:</strong> Predicts turnaround times and establishes clear milestones to eliminate scope creep before video editing even begins.</li>
          </ul>

          <h4>Impact on Creative Teams</h4>
          <p>By automating the discovery and briefing phase, admins and video editors save an average of 4-6 hours per project, enabling teams to take on more high-paying clients with confidence.</p>
        </div>
      `
    },
    2: {
      badge: "Cloud Workflows",
      title: "Automating Google Drive Workflows for Fast-Paced Creative Studios",
      readTime: "4 min read &bull; Drive API v3",
      content: `
        <div class="article-full-content">
          <p>Organizing raw video footage across dozens of active projects is notoriously error-prone. Editors often waste hours emailing permission links, creating nested folders manually, and searching for lost footage.</p>
          
          <h4>Direct Google Drive API v3 Integration</h4>
          <p>EditDesk handles all file lifecycle management automatically:</p>
          <ul>
            <li><strong>Zero-Touch Provisioning:</strong> As soon as a client approves a brief, EditDesk triggers Google Drive API v3 to create a standardized directory structure (e.g., <code>/Inputs/Footage</code>, <code>/Audio_Stems</code>, <code>/Drafts_V1_V3</code>, <code>/Final_Masters</code>).</li>
            <li><strong>Permission Delegation:</strong> Clients receive upload-only access to input folders, while draft preview links are securely protected until milestones are completed.</li>
            <li><strong>Admin Quick-Deliverables:</strong> Video editors can push final ProRes exports directly from Premiere or DaVinci Resolve into the client's private portal directory with one click.</li>
          </ul>

          <p>The result is a clean, organized cloud workspace that reinforces your studio's professional image.</p>
        </div>
      `
    },
    3: {
      badge: "Business & Finance",
      title: "Managing Client Revisions & Milestone Payments Without the Headache",
      readTime: "6 min read &bull; Milestone Protection",
      content: `
        <div class="article-full-content">
          <p>Scope creep and late payments are the two primary reasons creative freelancers face cash flow instability. EditDesk combines timecode review tools with milestone payment protection to keep both clients and creators happy.</p>
          
          <h4>Timecoded Feedback & Clear Revisions</h4>
          <p>Rather than deciphering lengthy email threads, clients drop timestamped markers right on the video timeline (e.g., <em>"01:24 - brighten color grade on main subject"</em>). Editors can mark each revision note as completed, ensuring clarity.</p>

          <h4>Protected Deliverable Unlocks</h4>
          <ul>
            <li><strong>Watermarked Previews:</strong> Draft versions are previewed securely within EditDesk's custom player.</li>
            <li><strong>Escrow / Milestone Release:</strong> Full uncompressed master files are automatically unlocked for download once the client signs off and completes the milestone payment.</li>
            <li><strong>Automated Payment Reminders:</strong> EditDesk sends gentle email notices before due dates, avoiding awkward manual follow-up messages.</li>
          </ul>
        </div>
      `
    }
  };

  const articleModalTitle = document.getElementById('articleModalTitle');
  const articleModalBadge = document.getElementById('articleModalBadge');
  const articleModalBody = document.getElementById('articleModalBody');

  articleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const articleId = btn.getAttribute('data-article');
      const article = articleData[articleId];

      if (article && articleModal) {
        articleModalTitle.textContent = article.title;
        articleModalBadge.textContent = article.badge;
        articleModalBody.innerHTML = article.content;
        articleModal.classList.add('active');
        articleModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeArticle = () => {
    articleModal.classList.remove('active');
    articleModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeArticleModal) {
    closeArticleModal.addEventListener('click', closeArticle);
  }

  articleModal.addEventListener('click', (e) => {
    if (e.target === articleModal) {
      closeArticle();
    }
  });

  // --- 8. CTA Email Submission Form ---
  if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = ctaEmailInput.value.trim();

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        ctaFeedback.textContent = "Please enter a valid email address.";
        ctaFeedback.className = "form-feedback error";
        return;
      }

      // Simulate submission success
      ctaFeedback.textContent = "🎉 Access invite dispatched! Check your inbox for your EditDesk portal login.";
      ctaFeedback.className = "form-feedback success";
      showToast(`Access granted! Email sent to ${email}`);

      // Store in localStorage for demonstration
      try {
        const subscribers = JSON.parse(localStorage.getItem('editdesk_leads') || '[]');
        subscribers.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('editdesk_leads', JSON.stringify(subscribers));
      } catch (err) {
        console.warn('Storage not accessible', err);
      }

      ctaEmailInput.value = '';
      setTimeout(() => {
        ctaFeedback.textContent = '';
      }, 6000);
    });
  }

  // --- 9. Toast Notification Helper ---
  let toastTimeout;
  function showToast(message) {
    if (!toast) return;
    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // --- 9. Global Escape Key Listener for Modals ---
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (articleModal && articleModal.classList.contains('active')) closeArticle();
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });
});
