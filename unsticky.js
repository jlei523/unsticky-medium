var stickiedElements = document.getElementsByClassName("u-fixed");

for (var i = 0; i < stickiedElements.length; i++) {
  document.getElementsByClassName("u-fixed")[i].classList.remove("u-fixed");
}
