// Add interactive animations
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");
  const serviceItems = document.querySelectorAll(".service-column li");

  // Service card hover effects
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    card.addEventListener("click", function () {
      const service = this.dataset.service;
      this.style.animation = "pulse 0.6s ease-in-out";

      setTimeout(() => {
        this.style.animation = "";
      }, 600);

      console.log(`Selected service: ${service}`);
    });
  });

  // Service items click animation
  serviceItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.style.background = "rgba(255, 215, 0, 0.2)";
      this.style.borderRadius = "5px";

      setTimeout(() => {
        this.style.background = "";
        this.style.borderRadius = "";
      }, 300);
    });
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  // Initialize scroll animations
  const animateElements = document.querySelectorAll(
    ".service-card, .detailed-services"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
});

// Add floating particle effect
function createParticle() {
  const particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.width = "4px";
  particle.style.height = "4px";
  particle.style.background = "rgba(255, 215, 0, 0.6)";
  particle.style.borderRadius = "50%";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = "100%";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "-1";

  document.body.appendChild(particle);

  const animation = particle.animate(
    [
      { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      { transform: `translateY(-100vh) rotate(360deg)`, opacity: 0 },
    ],
    {
      duration: 8000 + Math.random() * 4000,
      easing: "linear",
    }
  );

  animation.addEventListener("finish", () => {
    particle.remove();
  });
}

// Create particles periodically
setInterval(createParticle, 2000);

 var swiperProjects = new Swiper(".swiper-container", { 
    slidesPerView: "auto", 
    spaceBetween: 30, 
    navigation: { 
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev", 
    }, 
    pagination: { 
      el: ".swiper-pagination", 
      type: "fraction", 
    }
  });
 var swiperClients = new Swiper(".mySwiper_clients", { 
    slidesPerView: 5, 
    spaceBetween: 20, 
    loop: true, 
    autoplay: { 
      delay: 2000, 
      disableOnInteraction: false, 
    }, 
    breakpoints: { 
      320: { slidesPerView: 2 }, 
      768: { slidesPerView: 3 }, 
      1024: { slidesPerView: 5 }, 
    }
  });