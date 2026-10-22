/**
 * NOTES FROM THE BUILD (LATEST UPDATES)
 * ----------------------------------------------------
 * HOW TO ADD A NEW UPDATE:
 * To add a new update, simply insert a new entry at the VERY TOP of the 
 * `BUILD_UPDATES` array below.
 * 
 * Fields:
 * - date: The date or time range (e.g., "October 2026")
 * - tag: Category or project name (e.g., "WIQN", "Venture", "Milestone")
 * - tagType: "purple" | "teal" | "coral"
 * - title: Concise, motivating headline
 * - content: What you learned, built, or are working on
 * - note (optional): Brief takeaway or next step
 * ----------------------------------------------------
 */

const BUILD_UPDATES = [
  {
    id: "update-4",
    date: "October 2026",
    tag: "ADYK WIQN",
    tagType: "teal",
    title: "Shaping ADYK WIQN with Purpose and Precision",
    content: "Inspired by the fundamental question of how to know whether the software I build is operating as intended, I'm currently shaping ADYK WIQN. Adding useful features, testing workflows, and laying the groundwork for bigger ambitions.",
    note: "Focus: Project observation, reliability, and developer clarity."
  },
  {
    id: "update-3",
    date: "September – October 2026",
    tag: "Inspire & Cardex",
    tagType: "purple",
    title: "Addressing Real Developer & Creator Challenges",
    content: "Within our first two months at ADYK Multi Venture, Dinesh and I created ADYK Inspire and ADYK Cardex. Both products were conceived together to tackle real problems faced by developers and digital creators in everyday workflows.",
    note: "Milestone: Two product explorations underway in our first 60 days."
  },
  {
    id: "update-2",
    date: "September 5, 2026",
    tag: "Founding",
    tagType: "coral",
    title: "Co-founded ADYK Multi Venture with Dinesh",
    content: "Took the official leap to found ADYK Multi Venture together with my close friend Dinesh. Our vision is simple and uncompromising: build ideas into useful, high-impact things with honesty and craftsmanship.",
    note: "Official start of our multi-venture entrepreneurial journey."
  },
  {
    id: "update-1",
    date: "College 2nd Year (2025–2026)",
    tag: "Student OS",
    tagType: "purple",
    title: "Curiosity Sparked ATTENT-IN",
    content: "I didn’t enter college with a startup blueprint. In my second year studying AI & ML at Sri Krishna College of Engineering and Technology, pure curiosity led me to build ATTENT-IN, a Student OS—showing me what can happen when an idea gets a real chance.",
    note: "The spark that proved building is my true calling."
  }
];

// Function to render updates into the DOM
function renderBuildUpdates(containerId = "updates-container") {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear container
  container.innerHTML = "";

  BUILD_UPDATES.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "update-card reveal-on-scroll";
    card.style.setProperty("--stagger-index", index);
    card.setAttribute("data-update-id", item.id);

    const tagClass = item.tagType === "teal" ? "badge-teal" : (item.tagType === "coral" ? "badge-coral" : "badge-purple");

    card.innerHTML = `
      <div class="update-card-rail">
        <div class="update-node ${tagClass}"></div>
        <div class="update-line"></div>
      </div>
      <div class="update-card-content">
        <div class="update-meta">
          <span class="update-badge ${tagClass}">${escapeHtml(item.tag)}</span>
          <time class="update-date">${escapeHtml(item.date)}</time>
        </div>
        <h3 class="update-title">${escapeHtml(item.title)}</h3>
        <p class="update-body">${escapeHtml(item.content)}</p>
        ${item.note ? `
          <div class="update-takeaway">
            <span class="takeaway-bullet">✦</span>
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

// Auto-run if DOM is ready, or hook to DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => renderBuildUpdates());
} else {
  renderBuildUpdates();
}
