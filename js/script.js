  // Initialize Swiper
        const swiper = new Swiper('.swiper-hero', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000,

            // Pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Responsive breakpoints
            breakpoints: {
                320: {
                    direction: 'horizontal',
                },
                768: {
                    direction: 'horizontal',
                },
                1024: {
                    direction: 'horizontal',
                }
            }
        });

        // Pause autoplay on hover
        const swiperContainer = document.querySelector('.swiper');
        swiperContainer.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });

        swiperContainer.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });

        // Scroll down button functionality
        document.querySelectorAll('.scroll-down-circle').forEach(button => {
            button.addEventListener('click', () => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            });
        });// Add interactive animations
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
    el: ".swiper-proj-pagination",
    clickable: true
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

const serviceDetails = {
    civil: {
        title: 'تفاصيل الإنشاءات المدنية',
        columns: [
            [
                'الخدمات الإنشائية',
                'أعمال البناء والتشطيبات الخارجية',
                'أعمال التعريف',
                'تصميم وتنفيذ المباني السكنية'
            ],
            [
                'أعمال البنية التحتية',
                'تسليمات المعادن والمعدات',
                'أعمال الطلاء والتسليم',
                'إنشاء الطرق والجسور'
            ],
            [
                'أعمال النظافة والترميم',
                'أعمال تركيب الحديد',
                'أعمال البناء والتشطيبات الداخلية',
                'مقاولات البناء العامة'
            ]
        ]
    },
    electrical: {
        title: 'تفاصيل أعمال الكهرباء',
        columns: [
            [
                'تركيب الأنظمة الكهربائية',
                'صيانة الشبكات الكهربائية',
                'تمديد الكابلات الكهربائية',
                'تركيب اللوحات الكهربائية'
            ],
            [
                'أنظمة الإضاءة الذكية',
                'أنظمة الطاقة الشمسية',
                'أنظمة UPS والمولدات',
                'صيانة المحولات الكهربائية'
            ],
            [
                'اختبار وفحص الأنظمة',
                'تركيب أنظمة الحماية',
                'صيانة المعدات الكهربائية',
                'استشارات هندسية كهربائية'
            ]
        ]
    },
    mechanical: {
        title: 'تفاصيل الأعمال الميكانيكية',
        columns: [
            [
                'تركيب أنظمة التكييف',
                'صيانة المعدات الميكانيكية',
                'أنظمة السباكة والصرف',
                'تركيب المصاعد والسلالم المتحركة'
            ],
            [
                'أنظمة التهوية والتبريد',
                'صيانة المضخات والمحركات',
                'تركيب الأنابيب والمواسير',
                'أنظمة مكافحة الحريق'
            ],
            [
                'أعمال الحدادة واللحام',
                'صيانة الآلات الصناعية',
                'تصميم وتنفيذ الهياكل المعدنية',
                'استشارات هندسية ميكانيكية'
            ]
        ]
    },
    communications: {
        title: 'تفاصيل أعمال الاتصالات',
        columns: [
            [
                'تركيب شبكات الاتصالات',
                'أنظمة الألياف البصرية',
                'شبكات الإنترنت اللاسلكي',
                'أنظمة المراقبة والأمان'
            ],
            [
                'تركيب أبراج الاتصالات',
                'صيانة معدات الاتصالات',
                'أنظمة الصوت والصورة',
                'شبكات البيانات المتقدمة'
            ],
            [
                'أنظمة الاتصال الداخلي',
                'تركيب الكاميرات الأمنية',
                'صيانة الشبكات اللاسلكية',
                'استشارات تقنية متخصصة'
            ]
        ]
    },
    renovation: {
        title: 'تفاصيل أعمال الترميم',
        columns: [
            [
                'ترميم المباني التراثية',
                'إصلاح التشققات والعيوب',
                'تجديد الواجهات الخارجية',
                'ترميم الأسقف والعوازل'
            ],
            [
                'ترميم الأساسات والهياكل',
                'تجديد الأنظمة القديمة',
                'إعادة تأهيل المباني',
                'معالجة مشاكل الرطوبة'
            ],
            [
                'ترميم الزخارف والنقوش',
                'تجديد الأرضيات والجدران',
                'إصلاح أضرار الحوادث',
                'تقييم وفحص المباني'
            ]
        ]
    },
    maintenance: {
        title: 'تفاصيل الصيانة والتركيب',
        columns: [
            [
                'الصيانة الدورية للمعدات',
                'تركيب الأنظمة الجديدة',
                'صيانة أنظمة التكييف',
                'خدمات الطوارئ 24/7'
            ],
            [
                'صيانة المصاعد والسلالم',
                'تركيب أنظمة الأمان',
                'صيانة الأنظمة الكهربائية',
                'تطوير وتحديث الأنظمة'
            ],
            [
                'عقود الصيانة الشاملة',
                'التدريب التقني المتخصص',
                'قطع الغيار الأصلية',
                'الضمان الشامل على الأعمال'
            ]
        ]
    }
};

// Get DOM elements
const serviceCards = document.querySelectorAll('.service-card');
const detailedServices = document.getElementById('detailed-services');
const detailedTitle = document.getElementById('detailed-title');
const servicesColumns = document.getElementById('services-columns');

let currentActiveService = null;

// Function to show detailed services
function showDetailedServices(serviceType) {
    const details = serviceDetails[serviceType];
    if (!details) return;

    // Update title
    detailedTitle.textContent = details.title;

    // Clear existing columns
    servicesColumns.innerHTML = '';

    // Create columns
    details.columns.forEach(columnItems => {
        const column = document.createElement('div');
        column.className = 'service-column';
        
        const ul = document.createElement('ul');
        columnItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        
        column.appendChild(ul);
        servicesColumns.appendChild(column);
    });

    // Show the detailed services section with animation
    detailedServices.classList.add('show');
    
    // Scroll to detailed services section (only if not initial load)
    if (serviceType !== 'civil' || currentActiveService !== null) {
        setTimeout(() => {
            detailedServices.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 200);
    }
}

// Function to hide detailed services
function hideDetailedServices() {
    detailedServices.classList.remove('show');
    currentActiveService = null;
    
    // Remove active class from all cards
    serviceCards.forEach(card => {
        card.classList.remove('active');
    });
}

// Function to set default service
function setDefaultService() {
    const defaultServiceCard = document.querySelector('[data-service="civil"]');
    if (defaultServiceCard) {
        defaultServiceCard.classList.add('active');
        showDetailedServices('civil');
        currentActiveService = 'civil';
    }
}

// Add event listeners to service cards
serviceCards.forEach(card => {
    // Click event
    card.addEventListener('click', function() {
        const serviceType = this.getAttribute('data-service');
        
        if (currentActiveService === serviceType) {
            // If clicking the same service, hide details
            hideDetailedServices();
        } else {
            // Remove active class from all cards
            serviceCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Show detailed services
            showDetailedServices(serviceType);
            currentActiveService = serviceType;
        }
    });

    // Hover effects for better UX
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'translateY(-5px)';
        }
    });

    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'translateY(0)';
        }
    });
});

// Close detailed services when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.service-card') && 
        !event.target.closest('.detailed-services')) {
        hideDetailedServices();
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideDetailedServices();
    }
});

// Initial animation on page load
window.addEventListener('load', function() {
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            // Set default service after all animations complete
            if (index === serviceCards.length - 1) {
                setTimeout(() => {
                    setDefaultService();
                }, 500);
            }
        }, index * 150);
    });
});

// Navbar scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.custom-navbar');
    const scrollThreshold = window.innerHeight; // 100vh
    
    // Function to handle scroll
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener with throttling for better performance
    let scrollTimer = null;
    window.addEventListener('scroll', function() {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        
        scrollTimer = setTimeout(function() {
            handleScroll();
        }, 10); // 10ms throttle
    });
    
    // Handle initial state
    handleScroll();
    
    // Handle window resize to recalculate 100vh
    window.addEventListener('resize', function() {
        handleScroll();
    });
    
    // Smooth scrolling for navbar links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(function(navLink) {
                    navLink.classList.remove('activepg');
                });
                this.classList.add('activepg');
            }
        });
    });
    
    // Active link highlighting based on scroll position
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar.offsetHeight;
        const scrollPosition = window.pageYOffset + navbarHeight + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(function(link) {
                    link.classList.remove('activepg');
                });
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('activepg');
                }
            }
        });
    }
    
    // Add scroll listener for active link updating
    let activeTimer = null;
    window.addEventListener('scroll', function() {
        if (activeTimer) {
            clearTimeout(activeTimer);
        }
        
        activeTimer = setTimeout(function() {
            updateActiveLink();
        }, 50);
    });
});

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const offcanvasElement = document.getElementById("mobileMenu");
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    // كل الروابط جوا القائمة
    const navLinks = offcanvasElement.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            bsOffcanvas.hide(); // يقفل القائمة
        });
    });
});