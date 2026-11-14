/* =========================================================
   OUR LITTLE LOVE STORY — script.js
   Edit the `memories` object below to change photos & messages.
========================================================= */

/* ---------------------------------------------------------
   1. MEMORY DATA
   Add or remove photo paths freely — the gallery, lightbox
   and month cards all read from this single object.
--------------------------------------------------------- */
const memories = {
  "January 2026": {
    message: "Medju niwang pa kayo ta diri dapita  HAHAHAHAHA",
    photos: [
      "images/january/january-01.jpg",
      "images/january/january-02.jpg",
      "images/january/january-03.jpg",
      "images/january/january-04.jpg",
      "images/january/january-05.jpg",
      "images/january/january-06.jpg",
      "images/january/january-07.jpg"
    ]
  },
  "February 2026": {
    message: "About this photos i would like to say is that even at my lowest and highest point your are always there for me and i will always be grateful for that. and I love you so much. ❤️",
    photos: [
      "images/february/february-01.jpg",
      "images/february/february-02.jpg",
      "images/february/february-05.jpg",
      "images/february/february-06.jpg",
      "images/february/february-07.jpg",
      "images/february/february-03.jpg",
      "images/february/february-04.jpg",
      "images/february/february-08.jpg",
      "images/february/february-09.jpg",
      "images/february/february-10.jpg",
      "images/february/february-11.jpg",
      "images/february/february-12.jpg"
    ]
  },
  "March 2026": {
    message: "Gamay ra tag picture diri during this month pero daghan man pud tag memories na create together hehehe😘",
    photos: [
      "images/march/march-02.jpg",
      "images/march/march-03.jpg",
      "images/march/march-04.jpg",
      "images/march/march-01.jpg"
    ]
  },
  "April 2026": {
    message: "To this picutres I would like to say is I was happy during this time beacuse we have lots of time and days spent together and shempre I really happy to be with you muahh😘",
    photos: [
      "images/april/april-06.jpg",
      "images/april/april-01.jpg",
      "images/april/april-02.jpg",
      "images/april/april-03.jpg",
      "images/april/april-04.jpg",
      "images/april/april-05.jpg",
      "images/april/april-07.jpg",
      "images/april/april-08.jpg",
      "images/april/april-09.jpg"
    ]
  },
  "May 2026": {
    message: "I was so happy during this month becuase daghan natag mga struggle na na overcome together and look at us now we are still together thats why i am so happy and grateful to have you in my life.",
    photos: [
      "images/may/photo1.jpg",
      "images/may/photo2.jpg"
    ]
  },
  "June 2026": {
    message: "You know what during this month I was wondering what if you give up on me and I was so scared that you will leave me but I was wrong that time and yeah im so lucky to have you in my life 🥹",
    photos: [
      "images/june/june-05.png",
      "images/june/june-06.png",
      "images/june/june-07.png",
      "images/june/june-09.png",
      "images/june/june-10.png",
      "images/june/june-11.png",
      "images/june/june-12.png",
      "images/june/june-13.png",
      "images/june/june-14.png",
      "images/june/june-01.png",
      "images/june/june-02.png",
      "images/june/june-03.png",
      "images/june/june-04.png",
      "images/june/june-08.png"
    ]
  },
  "July 2026": {
    message: "This month we have lots of pictures together cause we have lots of time together and thank you for everything you do for me.",
    photos: [
      "images/july/july-01.png",
      "images/july/july-02.png",
      "images/july/july-03.png",
      "images/july/july-04.png",
      "images/july/july-05.png",
      "images/july/july-06.png",
      "images/july/july-07.png",
      "images/july/july-08.png",
      "images/july/july-09.png",
      "images/july/july-10.png",
      "images/july/july-11.png",
      "images/july/july-12.png",
      "images/july/july-13.png",
      "images/july/july-14.png",
      "images/july/july-15.png",
      "images/july/july-16.png",
      "images/july/july-17.png",
      "images/july/july-18.png",
      "images/july/july-19.png",
      "images/july/july-20.png",
      "images/july/july-21.png",
      "images/july/july-22.png"
    ]
  },
  "August 2026": {
    message: "You know what for me Every day with you is a gift and I cherish those memories we've created together.❤️",
    photos: [
      "images/august/august-06.png",
      "images/august/august-04.png",
      "images/august/august-05.png",
      "images/august/august-03.png",
      "images/august/august-07.png",
      "images/august/august-08.png",
      "images/august/august-09.png",
      "images/august/august-10.png",
      "images/august/august-11.png",
      "images/august/august-01.png",
      "images/august/august-02.png"
    ]
  },
  "September 2026": {
    message: "About this I was thankful to have you and I always thankyou to have at my side I dont have any regrets to choose you in my life😘",
    photos: [
      "images/september/september-01.png",
      "images/september/september-02.png",
      "images/september/september-03.png",
      "images/september/september-04.png",
      "images/september/september-05.png",
      "images/september/september-06.png",
      "images/september/september-07.png"
    ]
  },
  "October 2026": {
    message: "October wrapped us in cozy evenings and quiet gratitude. I never get tired of choosing you, over and over again.",
    photos: [
      "images/october/photo1.jpg",
      "images/october/photo2.jpg"
    ]
  },
  "November 2026": {
    message: "November made me reflect on how far we've come. Out of everything I'm thankful for this year, you're at the very top of the list.",
    photos: [
      "images/november/photo1.jpg",
      "images/november/photo2.jpg"
    ]
  },
  "December 2026": {
    message: "December closed out the year the way it started — with you. Here's to everything we built these past twelve months, and everything still ahead of us.",
    photos: [
      "images/december/photo1.jpg",
      "images/december/photo2.jpg"
    ]
  }
};

/* ---------------------------------------------------------
   2b. HOME PAGE FLOATING PHOTOS
   These are just decorative "polaroids" on the landing page.
   Add, remove, or swap paths freely (up to 8 look best) —
   photos and balanced layouts are randomized on each visit.
--------------------------------------------------------- */
const heroPhotos = [
  { src: "images/hero/school-selfie.jpg", position: "62% center" },
  { src: "images/hero/beach-selfie.jpg", position: "center center" },
  { src: "images/hero/funny-selfie.jpg", position: "center 42%" },
  { src: "images/hero/close-selfie.jpg", position: "center 36%" },
  { src: "images/hero/memory-20260929.jpg", position: "center 38%" },
  { src: "images/hero/memory-20261018.jpg", position: "center 42%" },
  { src: "images/hero/memory-20261023a.jpg", position: "center 38%" },
  { src: "images/hero/memory-20261023b.jpg", position: "center 38%" }
];

const heroPositionLayouts = {
  desktop: [
    [
      { top: "17%", left: "6%" },
      { bottom: "15%", right: "7%" },
      { top: "10%", right: "18%" },
      { bottom: "10%", left: "18%" },
      { top: "48%", left: "3%" },
      { top: "45%", right: "3%" },
      { top: "9%", left: "23%" },
      { bottom: "7%", right: "23%" }
    ],
    [
      { top: "14%", left: "3%" },
      { bottom: "14%", right: "4%" },
      { top: "30%", right: "16%" },
      { bottom: "27%", left: "15%" },
      { top: "49%", left: "4%" },
      { top: "49%", right: "4%" },
      { top: "8%", left: "22%" },
      { bottom: "7%", right: "22%" }
    ],
    [
      { top: "22%", left: "5%" },
      { bottom: "22%", right: "4%" },
      { top: "8%", right: "20%" },
      { bottom: "9%", left: "18%" },
      { top: "53%", left: "3%" },
      { top: "38%", right: "3%" },
      { top: "7%", left: "24%" },
      { bottom: "6%", right: "22%" }
    ]
  ],
  mobile: [
    [
      { top: "9%", left: "3%" },
      { top: "9%", right: "3%" },
      { top: "25%", left: "2%" },
      { top: "25%", right: "2%" },
      { bottom: "14%", left: "2%" },
      { bottom: "14%", right: "2%" },
      { bottom: "4%", left: "3%" },
      { bottom: "4%", right: "3%" }
    ],
    [
      { top: "11%", left: "2%" },
      { top: "11%", right: "2%" },
      { top: "27%", left: "3%" },
      { top: "27%", right: "3%" },
      { bottom: "13%", left: "3%" },
      { bottom: "13%", right: "3%" },
      { bottom: "3%", left: "2%" },
      { bottom: "3%", right: "2%" }
    ],
    [
      { top: "8%", left: "4%" },
      { top: "8%", right: "4%" },
      { top: "24%", left: "2%" },
      { top: "24%", right: "2%" },
      { bottom: "15%", left: "2%" },
      { bottom: "15%", right: "2%" },
      { bottom: "5%", left: "4%" },
      { bottom: "5%", right: "4%" }
    ]
  ]
};

/* ---------------------------------------------------------
   2c. TIMELINE / JOURNEY DATA
   Add, remove, or edit entries freely.
--------------------------------------------------------- */
const journey = [
  { date: "August 2025", icon: "📸", title: "First memory of the year", desc: "The chapter began, and we started writing it together." },
  { date: "September 9, 2025", icon: "💕", title: "The beginning of our conversation in chat", desc: "During this time your the one who do first move in chat but im the one who fall inlove first because I've had a crush on you for a long time its begin in our first year in college during at our event hehehe" },
  { date: "November 8, 2026", icon: "🌸", title: "Our story begins", desc: "This time we're offically a couple and I was happy that time😘" },
  
];

/* =========================================================
   3. STATE
========================================================= */
let currentMonth = null;
let currentPhotoIndex = 0;
let typewriterTimer = null;
let pendingMessage = "";

/* =========================================================
   4. NAVIGATION BETWEEN VIEWS
========================================================= */
const views = {
  home: document.getElementById("view-home"),
  memories: document.getElementById("view-memories"),
  month: document.getElementById("view-month"),
  journey: document.getElementById("view-journey"),
  about: document.getElementById("view-about"),
};

function showView(name){
  Object.entries(views).forEach(([key, el]) => {
    el.classList.toggle("active", key === name);
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    const target = link.dataset.nav === "home" ? "home"
      : link.dataset.nav; // memories / journey / about map 1:1; month has no nav link
    link.classList.toggle("active", target === name || (name === "month" && link.dataset.nav === "memories"));
  });

  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  // close mobile menu if open
  navLinks.classList.remove("open");
  navToggle.classList.remove("open");

  // re-run reveal observer on newly visible elements
  requestAnimationFrame(observeReveals);
}

document.querySelectorAll("[data-nav]").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    showView(el.dataset.nav);
  });
});

document.getElementById("openMemoriesBtn").addEventListener("click", (e) => {
  burstHearts(e.currentTarget);
  setTimeout(() => showView("memories"), 260);
});
document.getElementById("backToMonths").addEventListener("click", () => showView("memories"));

/* ---------------------------------------------------------
   Heart-burst micro-interaction (click delight)
--------------------------------------------------------- */
function burstHearts(originEl){
  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const count = 10;

  for (let i = 0; i < count; i++){
    const heart = document.createElement("span");
    heart.textContent = "❤";
    heart.className = "burst-heart";
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const distance = 60 + Math.random() * 50;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 30;
    heart.style.left = `${cx}px`;
    heart.style.top = `${cy}px`;
    heart.style.setProperty("--dx", `${dx}px`);
    heart.style.setProperty("--dy", `${dy}px`);
    heart.style.fontSize = `${Math.random() * 10 + 12}px`;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

/* Mobile hamburger menu */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

/* =========================================================
   4b. RENDER HOME FLOATING PHOTOS
========================================================= */
function renderHeroPhotos(){
  const container = document.getElementById("homeFloatPhotos");
  if (!container) return;
  // Keep the HTML photos as a no-JavaScript fallback, and shuffle them through
  // the curated slots so every visit gets a fresh but balanced arrangement.
  if (!container.children.length){
    heroPhotos.forEach((photo, i) => {
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.className = `home-float-photo hero-slot-${i + 1}`;
      img.style.objectPosition = photo.position;
      img.decoding = "async";
      container.appendChild(img);
    });
  }

  const photos = Array.from(container.children);
  const slots = photos.map((_, i) => i + 1);
  for (let i = slots.length - 1; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [slots[i], slots[randomIndex]] = [slots[randomIndex], slots[i]];
  }

  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const layouts = isMobile ? heroPositionLayouts.mobile : heroPositionLayouts.desktop;
  const layout = layouts[Math.floor(Math.random() * layouts.length)];
  photos.forEach((photo, i) => {
    const slot = slots[i];
    photo.className = `home-float-photo hero-slot-${slot}`;
    ["top", "right", "bottom", "left"].forEach(side => {
      photo.style[side] = "auto";
    });
    const position = layout[slot - 1];
    if (position){
      Object.entries(position).forEach(([side, value]) => {
        photo.style[side] = value;
      });
    }
  });
}


const monthGrid = document.getElementById("monthGrid");

function renderMonthGrid(){
  monthGrid.innerHTML = "";
  Object.entries(memories).forEach(([monthName, data]) => {
    const count = data.photos.length;
    const card = document.createElement("div");
    card.className = "month-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", count > 0
      ? `Open ${monthName} memories`
      : `Unlock ${monthName} memories`);
    if (count === 0) card.classList.add("month-card-empty");

    const cover = count > 0 ? data.photos[0] : "";

    card.innerHTML = `
      ${cover ? `<img class="card-photo" src="${cover}" alt="${monthName} preview" loading="lazy">` : ""}
      <div class="card-content">
        <span class="card-heart">💕</span>
        <p class="card-month">${monthName.split(" ")[0]} ${monthName.split(" ")[1]}</p>
        <p class="${count > 0 ? "card-count" : "card-count card-unlock"}">
          ${count > 0 ? `${count} beautiful ${count === 1 ? "memory" : "memories"}` : "Unlock Memories"}
        </p>
      </div>
    `;

    card.addEventListener("click", () => openMonth(monthName));
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") openMonth(monthName);
    });
    addTiltEffect(card);

    monthGrid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   3D tilt-on-hover for month cards (cursor-aware)
--------------------------------------------------------- */
function addTiltEffect(card){
  const maxTilt = 8;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;
    card.style.transform = `perspective(700px) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.classList.add("tilting");
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.classList.remove("tilting");
  });
}

/* =========================================================
   6. MONTH DETAIL PAGE
========================================================= */
const monthEyebrow = document.getElementById("monthEyebrow");
const monthTitle = document.getElementById("monthTitle");
const monthCount = document.getElementById("monthCount");
const gallery = document.getElementById("gallery");
const messageCard = document.getElementById("messageCard");
const messageText = document.getElementById("messageText");

function openMonth(monthName){
  currentMonth = monthName;
  const data = memories[monthName];
  const [monthWord, year] = monthName.split(" ");

  monthEyebrow.textContent = "Chapter";
  monthTitle.textContent = `${monthName} ❤️`;
  monthCount.textContent = data.photos.length > 0
    ? `${data.photos.length} beautiful ${data.photos.length === 1 ? "memory" : "memories"}`
    : "Memories coming soon";

  // Render gallery
  gallery.innerHTML = "";
  if (data.photos.length === 0){
    const emptyState = document.createElement("p");
    emptyState.className = "gallery-empty";
    emptyState.textContent = "This chapter is waiting for its photos. Check back soon 💕";
    gallery.appendChild(emptyState);
  }
  data.photos.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    if (monthName === "August 2026" && i >= data.photos.length - 2){
      item.classList.add("gallery-item-zoomed");
    }
    const rot = (i % 2 === 0 ? -1 : 1) * (Math.random() * 2 + 1).toFixed(2);
    item.style.setProperty("--rot", `${rot}deg`);
    const img = document.createElement("img");
    img.alt = `${monthWord} memory ${i + 1}`;
    img.loading = "lazy";
    const markPortrait = () => {
      if (img.naturalHeight > img.naturalWidth){
        item.classList.add("gallery-item-portrait");
      }
    };
    img.addEventListener("load", markPortrait, { once: true });
    img.addEventListener("error", () => {
      console.error(`Failed to load ${monthName} photo: ${src}`);
    }, { once: true });
    img.src = src;
    if (img.complete && img.naturalWidth > 0) markPortrait();
    item.appendChild(img);
    item.addEventListener("click", () => {
      burstHearts(item);
      openLightbox(i);
    });
    gallery.appendChild(item);
  });

  clearTimeout(typewriterTimer);
  messageText.textContent = "";
  messageText.classList.remove("done");
  pendingMessage = data.photos.length > 0 ? data.message : "";
  messageCard.hidden = data.photos.length === 0;
  messageCard.classList.remove("in-view");

  showView("month");
}

/* =========================================================
   7. TYPEWRITER EFFECT FOR MONTHLY MESSAGE
========================================================= */
function typewriterEffect(text){
  clearTimeout(typewriterTimer);
  messageText.textContent = "";
  messageText.classList.remove("done");

  let i = 0;
  const speed = 22; // ms per character

  function type(){
    if (i <= text.length){
      messageText.innerHTML = text.slice(0, i) + '<span class="typing-cursor">&nbsp;</span>';
      i++;
      typewriterTimer = setTimeout(type, speed);
    } else {
      messageText.innerHTML = text;
    }
  }
  type();
}

/* =========================================================
   8. LIGHTBOX
========================================================= */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

function openLightbox(index){
  currentPhotoIndex = index;
  updateLightboxImage();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function updateLightboxImage(){
  const photos = memories[currentMonth].photos;
  lightboxImg.src = photos[currentPhotoIndex];
  lightboxCaption.textContent = `${currentMonth} — ${currentPhotoIndex + 1} of ${photos.length}`;
}

function showNextPhoto(){
  const photos = memories[currentMonth].photos;
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  updateLightboxImage();
}

function showPrevPhoto(){
  const photos = memories[currentMonth].photos;
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  updateLightboxImage();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", showNextPhoto);
lightboxPrev.addEventListener("click", showPrevPhoto);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNextPhoto();
  if (e.key === "ArrowLeft") showPrevPhoto();
});

/* Touch swipe support for mobile */
let touchStartX = 0;
const lightboxStage = document.querySelector(".lightbox-stage");
lightboxStage.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
lightboxStage.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const delta = touchEndX - touchStartX;
  if (Math.abs(delta) > 45){
    delta < 0 ? showNextPhoto() : showPrevPhoto();
  }
}, { passive: true });

/* =========================================================
   9. TIMELINE / JOURNEY RENDER
========================================================= */
const timelineEl = document.getElementById("timeline");

function renderTimeline(){
  timelineEl.innerHTML = "";
  journey.forEach(entry => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-date">${entry.date}</div>
      <h3 class="timeline-title">${entry.icon} ${entry.title}</h3>
      <p class="timeline-desc">${entry.desc}</p>
    `;
    timelineEl.appendChild(item);
  });
}

/* =========================================================
   10. SCROLL REVEAL (IntersectionObserver)
========================================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
      if (entry.target.id === "messageCard" && pendingMessage){
        const message = pendingMessage;
        pendingMessage = "";
        typewriterEffect(message);
      }
    }
  });
}, { threshold: 0.15 });

function observeReveals(){
  document.querySelectorAll(".reveal:not(.in-view), .month-card:not(.in-view), .gallery-item:not(.in-view), .timeline:not(.in-view), .timeline-item:not(.in-view)")
    .forEach(el => revealObserver.observe(el));
}

/* =========================================================
   11. MUSIC PLAYER
========================================================= */
const bgAudio = document.getElementById("bgAudio");

// Start music as the page opens. If audible autoplay is blocked, browsers
// allow this retry after the visitor's first interaction.
bgAudio.play().catch(() => {
  const retryMusic = () => {
    bgAudio.play().catch(() => {
      // Some browsers or local-file previews can still reject playback.
      // The error is intentionally handled so it does not reach the console.
    });
  };

  document.addEventListener("pointerdown", retryMusic, { once: true });
  document.addEventListener("keydown", retryMusic, { once: true });
});

/* =========================================================
   12. FLOATING HEARTS BACKGROUND (canvas)
========================================================= */
const canvas = document.getElementById("hearts-canvas");
const ctx = canvas.getContext("2d");
let hearts = [];
let canvasWidth, canvasHeight;

function resizeCanvas(){
  canvasWidth = canvas.width = window.innerWidth;
  canvasHeight = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const HEART_COLORS = [
  "201, 100, 127",   // rose
  "122, 35, 64",     // wine
  "230, 163, 179"    // blush
];

function createHearts(count){
  hearts = [];
  for (let i = 0; i < count; i++){
    hearts.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight + canvasHeight,
      size: Math.random() * 14 + 10,
      speed: Math.random() * 0.58 + 0.33,
      drift: Math.random() * 0.6 - 0.3,
      opacity: Math.random() * 0.34 + 0.42,
      angle: Math.random() * Math.PI * 2,
      color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)]
    });
  }
}

function drawHeart(x, y, size, opacity, color){
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  const topCurveHeight = size * 0.3;
  ctx.moveTo(0, topCurveHeight);
  ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
  ctx.bezierCurveTo(-size / 2, size * 0.6, 0, size * 0.8, 0, size);
  ctx.bezierCurveTo(0, size * 0.8, size / 2, size * 0.6, size / 2, topCurveHeight);
  ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
  ctx.closePath();
  ctx.shadowColor = `rgba(${color}, ${opacity * 0.6})`;
  ctx.shadowBlur = size * 0.5;
  ctx.fillStyle = `rgba(${color}, ${opacity})`;
  ctx.fill();
  ctx.restore();
}

function animateHearts(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  hearts.forEach(h => {
    h.y -= h.speed;
    h.x += Math.sin(h.angle) * 0.15 + h.drift * 0.02;
    h.angle += 0.01;

    if (h.y < -20){
      h.y = canvasHeight + 20;
      h.x = Math.random() * canvasWidth;
    }
    drawHeart(h.x, h.y, h.size, h.opacity, h.color);
  });
  requestAnimationFrame(animateHearts);
}

createHearts(window.innerWidth < 700 ? 14 : 24);
animateHearts();

/* =========================================================
   13. INIT
========================================================= */
function init(){
  renderHeroPhotos();
  let isMobile = window.matchMedia("(max-width: 760px)").matches;
  window.addEventListener("resize", () => {
    const nextIsMobile = window.matchMedia("(max-width: 760px)").matches;
    if (nextIsMobile !== isMobile){
      isMobile = nextIsMobile;
      renderHeroPhotos();
    }
  });
  renderMonthGrid();
  renderTimeline();
  showView("home");
  observeReveals();
}

document.addEventListener("DOMContentLoaded", init);
