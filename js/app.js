/* ==========================================================
   Hope4All Clinic — Main JavaScript
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderHours();
  renderContactHours();
  renderFooterHours();
  renderMarquee();
  renderServiceCards();
  renderAboutFeatures();
  renderBooking();
  renderFAQ();
  highlightToday();
});

/* ---------- Navigation ---------- */
function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Scroll effect
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  // Mobile toggle
  if (toggle) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open")
        ? "hidden"
        : "";
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Active link tracking
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}

/* ---------- Hours Rendering ---------- */
function getTodayIndex() {
  return new Date().getDay(); // 0 = Sunday
}

function dayIndex(jsDay) {
  // JS: 0=Sun, 1=Mon ... 6=Sat
  // CLINIC_HOURS: 0=Mon, 1=Tue ... 5=Sat, 6=Sun
  if (jsDay === 0) return 6;
  return jsDay - 1;
}

function highlightToday() {
  const idx = dayIndex(getTodayIndex());
  document.querySelectorAll(`.hours-table tbody tr[data-day-index="${idx}"]`)
    .forEach((tr) => tr.classList.add("today"));
  document.querySelectorAll(`.contact-hours-table tbody tr[data-day-index="${idx}"]`)
    .forEach((tr) => tr.classList.add("today"));
  document.querySelectorAll(`.footer-hours-table tr[data-day-index="${idx}"]`)
    .forEach((tr) => tr.classList.add("today"));
}

function buildHoursTable(id, captionId) {
  const table = document.getElementById(id);
  if (!table) return;

  const tbody = table.querySelector("tbody") || document.createElement("tbody");
  tbody.innerHTML = "";

  CLINIC_HOURS.forEach((entry, i) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-day-index", i);

    const tdDay = document.createElement("td");
    const tdTime = document.createElement("td");

    const todayIdx = dayIndex(getTodayIndex());
    if (i === todayIdx) {
      const indicator = document.createElement("span");
      indicator.className = "today-indicator";
      indicator.setAttribute("aria-hidden", "true");
      tdDay.appendChild(indicator);
    }

    tdDay.appendChild(document.createTextNode(entry.day));

    if (entry.open === null) {
      tdTime.textContent = "CLOSED";
      tdTime.classList.add("closed");
      tdTime.setAttribute("aria-label", `${entry.day}: closed`);
    } else {
      tdTime.textContent = `${entry.open} – ${entry.close}`;
      tdTime.setAttribute("aria-label", `${entry.day}: ${entry.open} to ${entry.close}`);
    }

    tr.appendChild(tdDay);
    tr.appendChild(tdTime);
    tbody.appendChild(tr);
  });

  if (!table.querySelector("tbody")) {
    table.appendChild(tbody);
  }
}

function renderHours() {
  buildHoursTable("hours-table");
}

function renderContactHours() {
  buildHoursTable("contact-hours-table");
}

function renderFooterHours() {
  const table = document.getElementById("footer-hours-table");
  if (!table) return;
  table.innerHTML = "";

  CLINIC_HOURS.forEach((entry, i) => {
    const tr = document.createElement("tr");
    tr.setAttribute("data-day-index", i);

    const tdDay = document.createElement("td");
    const tdTime = document.createElement("td");

    tdDay.textContent = entry.day.slice(0, 3);

    if (entry.open === null) {
      tdTime.textContent = "CLOSED";
      tdTime.classList.add("closed");
    } else {
      tdTime.textContent = `${entry.open} – ${entry.close}`;
    }

    tr.appendChild(tdDay);
    tr.appendChild(tdTime);
    table.appendChild(tr);
  });
}

/* ---------- Services Marquee ---------- */
function renderMarquee() {
  const list = document.getElementById("marquee-list");
  const clone = document.getElementById("marquee-list-clone");
  if (!list) return;

  CLINIC_SERVICES.forEach((service) => {
    const li = document.createElement("li");
    li.textContent = service;
    list.appendChild(li);
    if (clone) {
      const liClone = document.createElement("li");
      liClone.textContent = service;
      clone.appendChild(liClone);
    }
  });
}

/* ---------- Services ---------- */
function renderServiceCards() {
  const services = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>`,
      title: "Primary Healthcare",
      desc: "Comprehensive primary care for the whole family.",
      items: [
        "Child health services",
        "Women's health & contraceptives",
        "Men's health including circumcision",
        "Chronic disease consultations",
        "Minor ailments treatment",
      ],
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      title: "Drip Therapy",
      desc: "Professional intravenous therapy administered by qualified healthcare practitioners.",
      image: "drip.png",
      items: [],
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
      title: "Pre-Employment Medicals",
      desc: "Thorough occupational health assessments for employers and employees.",
      items: [
        "Pre-employment medicals",
        "Periodic medicals",
        "Follow-up medicals",
      ],
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
      title: "Maternal & Child Health",
      desc: "Caring for mothers and children through every stage.",
      items: [
        "Antenatal care",
        "Postnatal care",
        "Sonar scans",
        "Basic tests",
      ],
    },
  ];

  const grid = document.getElementById("services-grid");
  if (!grid) return;

  services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card";

    let itemsHtml = "";
    if (service.items.length > 0) {
      itemsHtml = `<ul>${service.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    }

    card.innerHTML = `
      ${service.image ? `<img class="service-card-img" src="${service.image}" alt="${service.title}" loading="lazy">` : ""}
      <div class="service-icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.desc}</p>
      ${itemsHtml}
    `;
    grid.appendChild(card);
  });
}

/* ---------- About Features ---------- */
function renderAboutFeatures() {
  const features = [
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
      title: "Compassionate Care",
      desc: "Every patient is treated with dignity, respect and genuine warmth.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: "Qualified Professionals",
      desc: "Registered practitioners with SANC and SASOHN accreditation.",
    },
    {
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
      title: "Convenient Hours",
      desc: "Open Monday to Friday with Sunday hours to serve you better.",
    },
  ];

  const container = document.getElementById("about-features");
  if (!container) return;

  features.forEach((f) => {
    const div = document.createElement("div");
    div.className = "about-feature";
    div.innerHTML = `
      <div class="about-feature-icon">${f.icon}</div>
      <div>
        <h4>${f.title}</h4>
        <p>${f.desc}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

/* ---------- Booking Form ---------- */
function renderBooking() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  // Populate service select with grouped options
  const serviceSelect = document.getElementById("booking-service");
  if (serviceSelect) {
    CLINIC_BOOKING_SERVICES.forEach((category) => {
      const optgroup = document.createElement("optgroup");
      optgroup.label = category.group;
      category.services.forEach((service) => {
        const option = document.createElement("option");
        option.value = service;
        option.textContent = service;
        optgroup.appendChild(option);
      });
      serviceSelect.appendChild(optgroup);
    });
  }

  // Populate time slots (08:00 – 16:30, every 30 minutes, plus 17:00)
  const timeSelect = document.getElementById("booking-time");
  if (timeSelect) {
    const addSlot = (value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = new Date(2000, 0, 1, parseInt(value, 10), parseInt(value.slice(3), 10))
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      timeSelect.appendChild(option);
    };

    for (let h = 8; h <= 16; h++) {
      addSlot(`${String(h).padStart(2, "0")}:00`);
      addSlot(`${String(h).padStart(2, "0")}:30`);
    }
    addSlot("17:00");
  }

  // Restrict date to today onwards
  const dateInput = document.getElementById("booking-date");
  if (dateInput) {
    const today = new Date();
    dateInput.min = today.toISOString().split("T")[0];
  }

  // Handle submission -> compose + open WhatsApp
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const name = document.getElementById("booking-name").value.trim();
    const phone = document.getElementById("booking-phone").value.trim();
    const service = document.getElementById("booking-service").value;
    const date = document.getElementById("booking-date").value;
    const time = document.getElementById("booking-time").value;
    const notes = document.getElementById("booking-notes").value.trim();

    const messageLines = [
      "NEW APPOINTMENT BOOKING REQUEST",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Preferred date: ${date}`,
      `Preferred time: ${time}`,
    ];

    if (notes) {
      messageLines.push(`Notes: ${notes}`);
    }

    messageLines.push("", "Please confirm this booking. Thank you!");

    const url =
      "https://wa.me/" +
      CLINIC_CONTACT.phoneInternational.replace("+", "") +
      "?text=" +
      encodeURIComponent(messageLines.join("\n"));

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

/* ---------- FAQ Accordion ---------- */
function renderFAQ() {
  const container = document.getElementById("faq-list");
  if (!container) return;

  CLINIC_FAQS.forEach((faq, index) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.id = `faq-item-${index}`;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "faq-question";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `faq-answer-${index}`);
    button.innerHTML = `
      ${faq.q}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
    `;

    const answer = document.createElement("div");
    answer.id = `faq-answer-${index}`;
    answer.className = "faq-answer";
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", button.id ? button.id : `faq-question-${index}`);
    button.id = `faq-question-${index}`;
    answer.innerHTML = `<div class="faq-answer-inner">${faq.a}</div>`;

    item.appendChild(button);
    item.appendChild(answer);
    container.appendChild(item);

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      // Close all others
      container.querySelectorAll(".faq-item.active").forEach((open) => {
        if (open !== item) {
          open.classList.remove("active");
          open.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          open.querySelector(".faq-answer").style.maxHeight = null;
        }
      });
      item.classList.toggle("active", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : null;
    });
  });
}
