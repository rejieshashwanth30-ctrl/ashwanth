/**
 * MAIN JAVASCRIPT LOGIC
 * Rejiesh Ashwanth — Personal Founder Website
 * Clean, lightweight, professional interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyNav();
  initMobileMenu();
  initScrollReveal();
  initWhatsAppCards();
  initEmailCopy();
  initCurrentYear();
});

/**
 * 1. STICKY NAV & ACTIVE SECTION HIGHLIGHTING
 */
function initStickyNav() {
  const header = document.getElementById("site-header");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const sections = document.querySelectorAll("section[id]");

  const handleNavScroll = () => {
    if (!header) return;
    if (window.scrollY > 15) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }

    // Determine current active section
    let currentId = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href").substring(1);
      if (href === currentId) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  };

  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll();

  // Smooth scroll with offset for anchor links
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
          
          // Close mobile menu if open
          const mobileMenu = document.getElementById("mobile-menu");
          const menuBtn = document.getElementById("mobile-menu-btn");
          if (mobileMenu && mobileMenu.classList.contains("is-open")) {
            mobileMenu.classList.remove("is-open");
            if (menuBtn) {
              menuBtn.setAttribute("aria-expanded", "false");
              menuBtn.classList.remove("is-active");
            }
            document.body.classList.remove("menu-locked");
          }
        }
      }
    });
  });
}

/**
 * 2. COMPACT ACCESSIBLE MOBILE MENU
 */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuBtn.classList.toggle("is-active", isOpen);
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("menu-locked", isOpen);
  };

  menuBtn.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu.classList.contains("is-open")) {
        toggleMenu();
      }
    });
  });

  // Close when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      toggleMenu();
      menuBtn.focus();
    }
  });

  // Close when clicking outside of navbar
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("is-open") &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      toggleMenu();
    }
  });
}

/**
 * 3. SUBTLE SCROLL REVEAL (RESPECTS PREFERS-REDUCED-MOTION)
 */
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

/**
 * 4. WHATSAPP CONVERSATION CARDS
 * Prepares messages for visitors to review and send directly
 */
function initWhatsAppCards() {
  const cards = document.querySelectorAll(".whatsapp-card[data-wa-url]");

  cards.forEach((card) => {
    const handleCardClick = () => {
      const url = card.getAttribute("data-wa-url");
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    };

    card.addEventListener("click", handleCardClick);

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardClick();
      }
    });
  });
}

/**
 * 5. EMAIL COPY TO CLIPBOARD
 */
function initEmailCopy() {
  const copyBtn = document.getElementById("copy-email-btn");
  const copyFeedback = document.getElementById("copy-feedback");
  const emailText = "rejieshashwanth30@gmail.com";

  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = emailText;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      if (copyFeedback) {
        copyFeedback.classList.add("show-feedback");
        setTimeout(() => {
          copyFeedback.classList.remove("show-feedback");
        }, 2200);
      }
    } catch (err) {
      console.warn("Unable to copy email automatically:", err);
    }
  });
}

/**
 * 6. FOOTER CURRENT YEAR
 */
function initCurrentYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
