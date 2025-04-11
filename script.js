// Show button when user scrolls down
window.onscroll = function () {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };
  
  // Scroll to top on click
  document.getElementById("topBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader-wrapper");
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => loader.remove(), 500); // Fully remove it after fade out
  });
  