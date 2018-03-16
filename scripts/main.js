typeWriterEffect();

/* Show-Hide NAVIGATION */
var visible = false;
var navButton = document.getElementById("show-hide-button");
var topNav = document.getElementById("top-nav");
function showHide() {
    if(visible) {
      topNav.classList.remove("show-nav");
      visible = false;
    }
    else {
      topNav.classList.add("show-nav");
      visible = true;
    }
}
navButton.addEventListener("click", showHide);
