document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // NAVIGATION & NAVBAR SCROLL
  // ==========================================
  const header = document.querySelector('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Active Nav Item highlighting on scroll
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      const linkHref = item.querySelector('a').getAttribute('href').substring(1);
      if (linkHref === current) {
        item.classList.add('active');
      }
    });
  });

  // Mobile Hamburger Toggle
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Close mobile menu on nav link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && navMenu.classList.contains('open')) {
      mobileToggle.classList.remove('open');
      navMenu.classList.remove('open');
    }
  });


  // ==========================================
  // SCROLL TRIGGER ANIMATIONS (IntersectionObserver)
  // ==========================================
  const animationOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.classList.add('in-view');

        // Section-specific JavaScript triggers
        if (target.id === 'about') {
          triggerAboutSection(target);
        } else if (target.classList.contains('education-card')) {
          triggerEducationCard(target);
        } else if (target.classList.contains('skills-card')) {
          triggerSkillsCard(target);
        } else if (target.classList.contains('cert-card-wrapper')) {
          triggerCertCard(target);
        } else if (target.id === 'achievements') {
          triggerAchievementsSection(target);
        } else if (target.id === 'contact') {
          triggerContactSection(target);
        }

        // Unobserve to trigger animation only once (premium feel)
        observer.unobserve(target);
      }
    });
  }, animationOptions);

  // Register all elements that need to reveal
  const animatedElements = document.querySelectorAll(
    'section, .reveal, .slide-left, .slide-right, .slide-up, .zoom-in-spring, .exp-alt-left, .exp-alt-right, .drop-rotate-in, .rise-rotate-in, .contact-form-slide, .contact-info-slide, .project-card, .experience-card, .education-card, .skills-card, .cert-card-wrapper'
  );
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });


  // ==========================================
  // ABOUT ME TRIGGER
  // ==========================================
  function triggerAboutSection(aboutSection) {
    const cards = aboutSection.querySelectorAll('.mv-card');
    cards.forEach(card => {
      card.classList.remove('flip-init');
      card.classList.add('in-view');
    });
  }


  // ==========================================
  // EDUCATION: TYPEWRITER HIGHLIGHTS
  // ==========================================
  function triggerEducationCard(card) {
    const highlights = card.querySelectorAll('.edu-highlight-item');
    highlights.forEach((item, index) => {
      const originalText = item.getAttribute('data-typewriter');
      if (originalText) {
        setTimeout(() => {
          typewriteText(item, originalText);
        }, index * 400); // Stagger typewriter effect
      }
    });
  }

  function typewriteText(element, text, speed = 15) {
    element.textContent = '';
    element.style.opacity = '1';
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }


  // ==========================================
  // SKILLS: STAGGER PILLS BOUNCE-IN
  // ==========================================
  function triggerSkillsCard(card) {
    const pills = card.querySelectorAll('.skill-pill');
    pills.forEach((pill, index) => {
      setTimeout(() => {
        pill.style.opacity = '1';
        pill.style.transform = 'scale(1) translateY(0)';
      }, index * 65); // Playful staggered bounce
    });
  }


  // ==========================================
  // CERTIFICATIONS: SNAP FLAT & 3D TILT
  // ==========================================
  function triggerCertCard(wrapper) {
    const card = wrapper.querySelector('.cert-card');
    // Snap flat animation
    setTimeout(() => {
      card.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.4s ease';
      card.style.transform = 'rotate(0deg)';
      
      // Initialize 3D Mouse-Follow Tilt after snap finishes
      setTimeout(() => {
        initTilt(card);
      }, 800);
    }, 200);
  }

  function initTilt(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse x inside card
      const y = e.clientY - rect.top;  // mouse y inside card
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation (max tilt 4 degrees)
      const rotateX = ((centerY - y) / centerY) * 4;
      const rotateY = ((x - centerX) / centerX) * 4;
      
      card.style.transition = 'transform 0.1s ease, background-color 0.4s ease';
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s ease, background-color 0.4s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }


  // ==========================================
  // ACHIEVEMENTS: STAT COUNTERS
  // ==========================================
  function triggerAchievementsSection(section) {
    const stats = section.querySelectorAll('.stat-num');
    stats.forEach(stat => {
      const targetVal = parseInt(stat.getAttribute('data-val'), 10);
      animateStatCounter(stat, targetVal);
    });
  }

  function animateStatCounter(element, target, duration = 1200) {
    let startTime = null;
    const isPlus = element.textContent.includes('+');
    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentVal = Math.min(Math.floor((progress / duration) * target), target);
      element.textContent = isPlus ? `${currentVal}+` : `${currentVal}`;
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = isPlus ? `${target}+` : `${target}`;
      }
    }
    requestAnimationFrame(animate);
  }


  // ==========================================
  // CONTACT: SEQUENTIAL UNDERLINE DRAWS
  // ==========================================
  function triggerContactSection(section) {
    const underlines = section.querySelectorAll('.form-underline');
    underlines.forEach((underline, index) => {
      // Stagger sequential intro-draw of underlines
      setTimeout(() => {
        underline.style.width = '100%';
        setTimeout(() => {
          // If field is NOT focused, shrink back. Otherwise keep drawn.
          const inputField = underline.previousElementSibling.previousElementSibling;
          if (document.activeElement !== inputField) {
            underline.style.width = '0%';
          }
        }, 800);
      }, index * 300);
    });
  }


  // ==========================================
  // FORM INTERACTION & SUBMISSION
  // ==========================================
  const contactForm = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('form-submit-btn');

  // Input styling handling
  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach(input => {
    const underline = input.nextElementSibling.nextElementSibling;
    
    input.addEventListener('focus', () => {
      underline.style.width = '100%';
    });

    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        underline.style.width = '0%';
      }
    });
  });

  // Web3Forms API Submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const subject = document.getElementById('form-subject').value;
    
    // Update the hidden subject field with the user's subject
    document.getElementById('form-subject-hidden').value = `Portfolio Contact: ${subject}`;

    // Premium button loading states
    submitBtn.classList.remove('pulse-gently');
    submitBtn.textContent = 'Sending Message...';
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        // Show success state
        submitBtn.textContent = 'Message Sent Successfully!';
        submitBtn.style.backgroundColor = '#2a9d8f';
        submitBtn.style.borderColor = '#2a9d8f';
        submitBtn.style.color = '#ffffff';
        submitBtn.style.opacity = '1';

        showToast('Thank you! Your message has been sent successfully.');

        // Reset form after delay
        setTimeout(() => {
          contactForm.reset();
          submitBtn.textContent = 'Send Message';
          submitBtn.style.backgroundColor = '';
          submitBtn.style.borderColor = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
          submitBtn.classList.add('pulse-gently');
          
          document.querySelectorAll('.form-underline').forEach(u => u.style.width = '0%');
        }, 3000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      // Show error state
      submitBtn.textContent = 'Failed to Send';
      submitBtn.style.backgroundColor = '#c0392b';
      submitBtn.style.borderColor = '#c0392b';
      submitBtn.style.color = '#ffffff';
      submitBtn.style.opacity = '1';

      showToast('Something went wrong. Please try again or email directly.');

      // Reset button after delay
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.style.backgroundColor = '';
        submitBtn.style.borderColor = '';
        submitBtn.style.color = '';
        submitBtn.disabled = false;
        submitBtn.classList.add('pulse-gently');
      }, 3000);
    }
  });

  // Toast Function
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = msg;
    
    // Inject custom toast styling rules inline
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%) translateY(100px)',
      backgroundColor: '#3d2c1f',
      color: '#fdfbf7',
      padding: '14px 28px',
      borderRadius: '50px',
      boxShadow: '0 10px 30px rgba(61, 44, 31, 0.25)',
      zIndex: '9999',
      fontWeight: '600',
      fontSize: '0.9rem',
      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s ease',
      opacity: '0',
      textAlign: 'center',
      border: '1px solid #ddb892'
    });

    document.body.appendChild(toast);
    
    // Trigger entry transition
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(0)';
      toast.style.opacity = '1';
    }, 100);

    // Fade out and remove
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 4500);
  }

});
