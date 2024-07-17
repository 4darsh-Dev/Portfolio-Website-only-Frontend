// back to top 
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    const progressRing = backToTopButton.querySelector('.progress-ring__circle');
    const radius = progressRing.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
  
    progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
    progressRing.style.strokeDashoffset = circumference;
  
    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        progressRing.style.strokeDashoffset = offset;
    }
  
    function scrollHandler() {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const scrollPercent = (scrolled / scrollTotal) * 100;
  
        if (scrolled > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
  
        setProgress(scrollPercent);
    }
  
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
  
    window.addEventListener('scroll', scrollHandler);
    backToTopButton.addEventListener('click', scrollToTop);
  });
  
  
  
  // custom cursor js
  
  document.addEventListener("DOMContentLoaded", () => {
    const cursorOuter = document.querySelector(".cursor-outer");
    const cursorInner = document.querySelector(".cursor-inner");
    let lastX = 0, lastY = 0;
  
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
  
        cursorOuter.style.left = x + "px";
        cursorOuter.style.top = y + "px";
  
        cursorInner.style.left = x + "px";
        cursorInner.style.top = y + "px";
  
        // Smooth movement for inner cursor
        lastX += (x - lastX) * 0.2;
        lastY += (y - lastY) * 0.2;
        cursorInner.style.left = lastX + "px";
        cursorInner.style.top = lastY + "px";
    });
  
    document.addEventListener("mousedown", () => {
        cursorOuter.style.width = "40px";
        cursorOuter.style.height = "40px";
        cursorInner.style.width = "12px";
        cursorInner.style.height = "12px";
    });
  
    document.addEventListener("mouseup", () => {
        cursorOuter.style.width = "50px";
        cursorOuter.style.height = "50px";
        cursorInner.style.width = "8px";
        cursorInner.style.height = "8px";
    });
  
    document.addEventListener("mouseenter", () => {
        cursorOuter.style.opacity = "1";
        cursorInner.style.opacity = "1";
    });
  
    document.addEventListener("mouseleave", () => {
        cursorOuter.style.opacity = "0";
        cursorInner.style.opacity = "0";
    });
  });


  // services section ux js

// Vanilla Tilt.js for 3D card effect
VanillaTilt.init(document.querySelectorAll(".service-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

// Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach((card) => {
    observer.observe(card);
});

// Particle background
particlesJS("services", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#5755fe" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#007bff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});
  

