/**
 * NOTES FROM THE BUILD (LATEST UPDATES)
 * Rejiesh Ashwanth — Personal Founder Website
 * --------------------------------------------------------------------------
 * HOW TO ADD A NEW UPDATE:
 * Insert a new object at the VERY TOP of the `BUILD_UPDATES` array below.
 * The newest entry will always render first at the top of the timeline.
 * 
 * Example:
 * {
 *   id: "update-6",
 *   date: "November 2026",
 *   tag: "ADYK WIQN",
 *   title: "Your Update Title",
 *   content: "Clear description of what was built, learned, or explored.",
 *   note: "Brief takeaway or next step (optional)"
 * },
 * --------------------------------------------------------------------------
 */

const BUILD_UPDATES = [
  {
    id: "update-5",
    date: "October 2026",
    tag: "ADYK WIQN",
    title: "Launched ADYK WIQN — Live Now",
    content: "Within a month of founding ADYK Multi Venture Company, we built and launched ADYK WIQN. Inspired by the need to verify how projects operate in practice, the platform provides direct project observation and utility for builders.",
    note: "Status: Live at wiqn.in and open on GitHub."
  },
  {
    id: "update-4",
    date: "2025–2026",
    tag: "Hackathons",
    title: "10+ Hackathons with the Team: Starting with ROAD SOS",
    content: "Participated in more than 10 hackathons with my team, starting with our first project ROAD SOS. Reached Stage 2 in more than two competitions. While we didn't win, shared problem-solving and rapid iteration taught us invaluable teamwork and resilience.",
    note: "Key takeaway: Growth through shared problem-solving and rapid execution."
  },
  {
    id: "update-3",
    date: "September – October 2026",
    tag: "Inspire & Cardex",
    title: "Addressing Developer and Creator Challenges",
    content: "Worked with my team on ADYK Inspire and ADYK Cardex, two products conceived to address real-world problems faced by developers and creators.",
    note: "Milestone: Exploring two targeted tools for creators during our first 60 days."
  },
  {
    id: "update-2",
    date: "September 5, 2026",
    tag: "Founding",
    title: "Founded ADYK Multi Venture Company",
    content: "On September 5, 2026, Rejiesh Ashwanth and Dineshraj founded ADYK Multi Venture Company. Our mission is to build intelligent products that help people, founders, and teams make better decisions using real data, real users, and real insights.",
    note: "Official founding of ADYK Multi Venture Company."
  },
  {
    id: "update-1",
    date: "College 2nd Year (2025–2026)",
    tag: "Student OS",
    title: "Curiosity Led to ATTENT-IN",
    content: "I didn’t begin college with a startup plan. In my second year studying AI & ML at Sri Krishna College of Engineering and Technology, curiosity about startups led me to create ATTENT-IN, a Student OS, which gave me the confidence to keep building hands-on.",
    note: "The spark that initiated hands-on building from real problems."
  }
];

/**
 * Render updates into the timeline container
 */
function renderBuildUpdates(containerId = "updates-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  BUILD_UPDATES.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "update-card reveal-on-scroll";
    card.style.setProperty("--stagger-index", index);
    card.setAttribute("data-update-id", item.id);

    card.innerHTML = `
      <div class="update-card-rail" aria-hidden="true">
        <div class="update-node"></div>
        <div class="update-line"></div>
      </div>
      <div class="update-card-content">
        <div class="update-meta">
          <span class="update-badge">${escapeHtml(item.tag)}</span>
          <time class="update-date">${escapeHtml(item.date)}</time>
        </div>
        <h3 class="update-title">${escapeHtml(item.title)}</h3>
        <p class="update-body">${escapeHtml(item.content)}</p>
        ${item.note ? `
          <div class="update-takeaway">
            <span class="takeaway-bullet" aria-hidden="true">—</span>
            <span>${escapeHtml(item.note)}</span>
          </div>
        ` : ""}
      </div>
    `;

    container.appendChild(card);
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Auto-run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => renderBuildUpdates());
} else {
  renderBuildUpdates();
}
