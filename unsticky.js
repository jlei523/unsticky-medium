let stickiedElements = document.getElementsByClassName("u-fixed");

for (var i = 0; i < stickiedElements.length; i++) {
  stickiedElements[i].classList.remove("u-fixed");
}
