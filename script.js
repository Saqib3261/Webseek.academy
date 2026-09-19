// ==========================================
// WEBSEEK ACADEMY
// COMPLETE JAVASCRIPT
// ==========================================


// ==========================================
// SETTINGS
// ==========================================

const NOTES_URL = "#";


// ==========================================
// REGISTRATION MODAL
// ==========================================

const modal = document.getElementById("registerModal");
const registerBtn = document.getElementById("registerBtn");
const closeModalBtn = document.getElementById("closeModal");
const continueBtn = document.getElementById("continueBtn");
const navRegister = document.getElementById("navRegister");
const navRegisterMobile = document.getElementById("navRegisterMobile");

function closeModal() {
  if (!modal) return;
  modal.style.display = "none";
  sessionStorage.setItem("webseek_seen", "1");
}

function openModal(e) {
  if (!modal) return;
  if (e) e.preventDefault();
  modal.style.display = "grid";
}

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    closeModal();
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}

if (continueBtn) {
  continueBtn.addEventListener("click", closeModal);
}

if (navRegister) {
  navRegister.addEventListener("click", () => {
    closeModal();
  });
}

if (navRegisterMobile) {
  navRegisterMobile.addEventListener("click", () => {
    closeModal();
  });
}

// Hide popup if already seen
if (sessionStorage.getItem("webseek_seen")) {
  if (modal) {
    modal.style.display = "none";
  }
}

// Close modal when clicking outside box
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}


// ==========================================
// MOBILE MENU
// ==========================================

const menuButton = document.getElementById("menu");
const navigation = document.getElementById("nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });
  });
}


// ==========================================
// LESSON SEARCH
// ==========================================

const search = document.getElementById("search");
const lessonCards = document.querySelectorAll(".lesson");
const noResults = document.getElementById("noResults");

function updateLessons() {
  if (!search) return;

  const query = search.value.toLowerCase().trim();
  let results = 0;

  lessonCards.forEach((card, index) => {
    const searchableText = (
      (card.dataset.search || "") + " " + (card.innerText || "")
    ).toLowerCase();

    if (query === "") {
      card.style.display = index < 4 ? "" : "none";
      return;
    }

    if (searchableText.includes(query)) {
      card.style.display = "";
      results++;
    } else {
      card.style.display = "none";
    }
  });

  if (query !== "" && results === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}

if (search) {
  search.addEventListener("input", updateLessons);
  updateLessons();
}


// ==========================================
// YOUTUBE LESSON BUTTONS
// ==========================================

document.querySelectorAll(".watch").forEach((button) => {
  button.addEventListener("click", () => {
    const youtubeURL = button.dataset.url;

    if (!youtubeURL || youtubeURL === "PASTE-YOUR-YOUTUBE-LINK-HERE") {
      alert("The YouTube link for this lesson has not been added yet.");
      return;
    }

    window.open(youtubeURL, "_blank");
  });
});


// ==========================================
// NOTES PDF
// ==========================================

const notesBtn = document.getElementById("notesBtn");

if (notesBtn) {
  notesBtn.addEventListener("click", () => {
    if (!NOTES_URL || NOTES_URL === "#") {
      alert("Your Notes PDF link will be added here.");
    } else {
      window.open(NOTES_URL, "_blank");
    }
  });
}


// ==========================================
// COURSE SLIDER
// ==========================================

const courseSlider = document.getElementById("courseSlider");
const coursePrev = document.getElementById("coursePrev");
const courseNext = document.getElementById("courseNext");
const courseDots = document.getElementById("courseDots");
const courseCards = document.querySelectorAll("#courseSlider .card");

function getCardsPerView() {
  if (window.innerWidth <= 560) return 1;
  if (window.innerWidth <= 900) return 2;
  if (window.innerWidth <= 1100) return 3;
  return 4;
}

function getSlideWidth() {
  if (!courseSlider) return 0;
  return courseSlider.clientWidth;
}

function createCourseDots() {
  if (!courseDots) return;
  courseDots.innerHTML = "";

  const cardsPerView = getCardsPerView();
  const totalSlides = Math.ceil(courseCards.length / cardsPerView);

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = i === 0 ? "slider-dot active" : "slider-dot";
    courseDots.appendChild(dot);
  }
}

function updateCourseDots() {
  if (!courseSlider) return;

  const dots = document.querySelectorAll(".slider-dot");
  const slideWidth = getSlideWidth();
  if (!slideWidth) return;

  const currentSlide = Math.round(courseSlider.scrollLeft / slideWidth);

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

if (courseNext && courseSlider) {
  courseNext.addEventListener("click", () => {
    courseSlider.scrollBy({ left: getSlideWidth(), behavior: "smooth" });
  });
}

if (coursePrev && courseSlider) {
  coursePrev.addEventListener("click", () => {
    courseSlider.scrollBy({ left: -getSlideWidth(), behavior: "smooth" });
  });
}

if (courseSlider) {
  courseSlider.addEventListener("scroll", updateCourseDots);
}

window.addEventListener("resize", () => {
  createCourseDots();
  updateCourseDots();
});

createCourseDots();


// ==========================================
// SMOOTH INTERNAL LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetID = this.getAttribute("href");

    if (!targetID || targetID === "#") return;

    const target = document.querySelector(targetID);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
