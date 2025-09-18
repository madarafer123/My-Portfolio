// ===========================
// HAMBURGER MENU
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("active");
      });
    });
  }
});

// ===========================
// FILTRO DE PROJETOS (se quiser usar botões no futuro)
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");

        projects.forEach(project => {
          if (category === "all" || project.getAttribute("data-category") === category) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  }
});

// ===========================
// ANIMAÇÃO DAS SKILLS (progress bars)
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  function animateBars() {
    progressBars.forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent;
    });
  }

  // Ativa a animação quando a seção de skills entrar na tela
  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateBars();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
  }
});
