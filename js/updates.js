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
 *   id: "update-5",
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
    id: "update-4",
    date: "October 2026",
    tag: "ADYK WIQN",
    title: "Developing ADYK WIQN with Purpose and Care",
    content: "Inspired by the challenge of checking whether projects I built were working as expected, I am currently developing ADYK WIQN as a dedicated software platform. I am shaping it with useful additional features to solve genuine project verification friction.",
    note: "Focus: System observation, reliability, and practical builder utility."
  },
  {
    id: "update-3",
    date: "September – October 2026",
    tag: "Inspire & Cardex",
    title: "Addressing Developer and Creator Challenges",
    content: "During the first two months of ADYK Multi Venture Company, Dinesh and I created ADYK Inspire and ADYK Cardex. Both products were conceived together to tackle real problems faced by developers and creators.",
    note: "Milestone: Exploring two complementary tools for creators in our first 60 days."
  },
  {
    id: "update-2",
    date: "September 5, 2026",
    tag: "Founding",
    title: "Founded ADYK Multi Venture Company with Dinesh",
    content: "On September 5, 2026, my friend Dinesh and I officially founded ADYK Multi Venture Company. Our mission is to build intelligent products that help people, founders, and teams make better decisions using real data, real users, and real insights.",
    note: "Official start of our multi-venture company journey."
  },
  {
    id: "update-1",
    date: "College 2nd Year (2025–2026)",
    tag: "Student OS",
    title: "Curiosity Led to ATTENT-IN",
    content: "I didn’t enter college with a startup plan. In my second year studying AI & ML at Sri Krishna College of Engineering and Technology, curiosity about startups led me to create ATTENT-IN, a Student OS, which gave me the confidence to keep building hands-on.",
    note: "The experience that sparked my dedication to building products from real problems."
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
