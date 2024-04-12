console.log("I am working! ");
const author = "Adarsh Maurya!";
console.log(`Developer ${author}`);
var typed = new Typed(".dynamic-txt", {
  strings: ["Web Developer!", "Programmer!", "Blogger!"],
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


