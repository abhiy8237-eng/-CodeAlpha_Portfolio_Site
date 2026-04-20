
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Initial hidden state
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease-out";
});