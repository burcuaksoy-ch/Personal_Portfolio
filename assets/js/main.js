
window.onload = () => {
  window.scrollTo(0, 0);
};



/*-----------------------------DOWNLOAD CV BUTTON---------------------------*/

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = './assets/public/Cv.pdf';
    a.download = 'Burcu_AKSOY-CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
});



//------------------------- NAVIGATION BAR FUNCTION ------------------//
function myMenuFunction() {
  const menu = document.getElementById("myNavMenu");
 
  menu.classList.toggle("responsive");
}

/*----------------------- ADD SHADOW ON NAV WHILE SCROLLING ----------*/
window.addEventListener("scroll", headerShadow);

function headerShadow() {
  const navheader = document.getElementById("header");
  const scrolled = document.body.scrollTop > 50 || document.documentElement.scrollTop > 80;

  navheader.style.boxShadow = scrolled ? "0 1px 6px rgba(0,0,0,0.1)" : "none";
  navheader.style.height = scrolled ? "70px" : "90px";
  navheader.style.lineHeight = scrolled ? "70px" : "90px";
}

/*---------------------- TYPING EFFECT ----------------*/
const typingEffect = new Typed(".typedText", {
  strings: ["Teacher", "Developer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/*------------ SCROLL REVEAL ANIMATION ------------*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true
});

/*----- HOME -----*/
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/*-------------- PROJECT BOX -------------*/
sr.reveal(".project-box", { interval: 200 });

/*---------- HEADINGS -----------*/
sr.reveal(".top-header", {});

/*-------------- ABOUT INFO & CONTACT INFO ------------*/
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/*-------------- ABOUT SKILLS & FORM BOX ------------*/
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true
});
srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/*-------------- CHANGE ACTIVE LINK ------------*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);
    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);




