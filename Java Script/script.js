document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  const navBar = document.querySelector("nav .nav-bar");
  const navLinks = navBar.querySelectorAll("a.nav-bar");

  // Show the nav when menu button is clicked
  menuBtn.addEventListener("click", () => {
    navBar.style.display = "flex";
    navBar.style.flexDirection = "column";
    navBar.style.backgroundColor = "#0D0D0D";
    navBar.style.position = "absolute";
    navBar.style.top = "70px";
    navBar.style.right = "0";
    navBar.style.width = "100%";
    navBar.style.padding = "1rem";
    navBar.style.gap = "1rem";

    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
  });

  // Hide the nav when close button is clicked
  closeBtn.addEventListener("click", () => {
    navBar.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
  });

  // Responsive behavior on resize
  function handleResize() {
    if (window.innerWidth <= 520) {
      navBar.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "block";
    } else {
      navBar.style.display = "flex";
      navBar.style.flexDirection = "row";
      navBar.style.position = "static";
      navBar.style.padding = "0";
      menuBtn.style.display = "none";
      closeBtn.style.display = "none";
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
