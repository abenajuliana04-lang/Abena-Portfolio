// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


// CLOSE MENU WHEN A LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  observer.observe(element);

});


// CURRENT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();