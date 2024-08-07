console.log("I am working! ");
const author = "Adarsh Maurya!";
console.log(`Developer ${author}`);
var typed = new Typed(".dynamic-txt", {
  strings: ["Web Developer!",  "Programmer!", "Entrepreneur!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1e3,
  loop: !0,
});
let menuBtnCond = !0,
  checkLabel = document.getElementById("check-label");
const menuBtnChanger = function () {
  menuBtnCond
    ? ((checkLabel.innerHTML = "<i class='bx bx-x'></i>"), (menuBtnCond = !1))
    : ((checkLabel.innerHTML = "<i class='bx bx-menu'></i>"),
      (menuBtnCond = !0));
};
let menuBtn = document.getElementById("check");
menuBtn.addEventListener("click", menuBtnChanger);


// project section ux js
document.addEventListener("DOMContentLoaded", function() {
  const projectCards = document.querySelectorAll(".project-card");

  // Add event listeners to project cards
  projectCards.forEach(card => {
    card.addEventListener("mouseenter", function() {
      this.classList.add("hovered");
    });

    card.addEventListener("mouseleave", function() {
      this.classList.remove("hovered");
    });
  });
});


// certifcates section ux js

document.addEventListener("DOMContentLoaded", function() {
  const certificationCards = document.querySelectorAll(".certification-card");

  // Add event listeners to certification cards
  certificationCards.forEach(card => {
    card.addEventListener("mouseenter", function() {
      this.classList.add("hovered");
    });

    card.addEventListener("mouseleave", function() {
      this.classList.remove("hovered");
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelector(".about-img img");

  // Function to add bouncing class to the image
  function startBouncing() {
    image.classList.add("bouncing");
  }

  // Function to remove bouncing class from the image
  function stopBouncing() {
    image.classList.remove("bouncing");
  }

  // Start bouncing animation when the page loads
  startBouncing();

  // Continuously toggle bouncing animation
  setInterval(function() {
    stopBouncing();
    setTimeout(startBouncing, 50); // Wait for a short delay before starting again
  }, 2000); // Adjust the delay based on the duration of the animation (2s in this case)
});


