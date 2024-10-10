var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".top-nav").style.top = "0";
    document.querySelector(".botton-nav").style.top = "62px";
  } else {
    document.querySelector(".top-nav").style.top = "-100%";
    document.querySelector(".botton-nav").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
} 