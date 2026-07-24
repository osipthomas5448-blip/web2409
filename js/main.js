/* ============================================
   STRUCTURA ROOFING CO. — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* --- Mobile Nav Toggle --- */
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            const spans = navToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    /* --- Lead Popup Modal --- */
    const modalOverlay = document.getElementById('leadModal');
    const modalClose = document.querySelector('.modal-close');
    const leadForm = document.getElementById('leadForm');
    const formFields = document.getElementById('formFields');
    const formSuccess = document.getElementById('formSuccess');

    function openModal(service) {
        if (!modalOverlay) return;
        const serviceSelect = document.getElementById('serviceSelect');
        if (serviceSelect && service) {
            serviceSelect.value = service;
        }
        if (formFields) formFields.style.display = 'block';
        if (formSuccess) formSuccess.classList.remove('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) closeModal();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    // All CTA buttons trigger lead popup
    document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            var service = this.getAttribute('data-service') || '';
            openModal(service);
        });
    });

    // Form submission
    if (leadForm) {
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var consent = document.getElementById('consentCheck');
            if (consent && !consent.checked) {
                alert('Please agree to our Privacy Policy and Terms & Conditions to proceed.');
                return;
            }
            if (formFields) formFields.style.display = 'none';
            if (formSuccess) formSuccess.classList.add('active');
            leadForm.reset();
        });
    }

    /* --- Contact Form --- */
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var consent = contactForm.querySelector('#contactConsent');
            if (consent && !consent.checked) {
                alert('Please agree to our Privacy Policy and Terms & Conditions to proceed.');
                return;
            }
            contactForm.style.display = 'none';
            var successEl = document.getElementById('contactSuccess');
            if (successEl) successEl.classList.add('active');
        });
    }

    /* --- FAQ Accordion --- */
    document.querySelectorAll('.faq-question').forEach(function (question) {
        question.addEventListener('click', function () {
            var item = this.parentElement;
            var answer = item.querySelector('.faq-answer');
            var isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(function (faq) {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    /* --- Cookie Consent --- */
    var cookieBanner = document.getElementById('cookieBanner');
    var cookieAccept = document.getElementById('cookieAccept');
    var cookieDecline = document.getElementById('cookieDecline');

    if (cookieBanner && !localStorage.getItem('structura_cookie_consent')) {
        setTimeout(function () {
            cookieBanner.classList.add('active');
        }, 1500);
    }

    if (cookieAccept) {
        cookieAccept.addEventListener('click', function () {
            localStorage.setItem('structura_cookie_consent', 'accepted');
            cookieBanner.classList.remove('active');
        });
    }

    if (cookieDecline) {
        cookieDecline.addEventListener('click', function () {
            localStorage.setItem('structura_cookie_consent', 'declined');
            cookieBanner.classList.remove('active');
        });
    }

    /* --- Scroll Animations --- */
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .why-card, .process-step, .testimonial-card, .pricing-card, .faq-item, .value-card, .area-item, .contact-info-card, .gallery-item').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add visible class styles
    var style = document.createElement('style');
    style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
    document.head.appendChild(style);

    /* --- Navbar Scroll Effect --- */
    var navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    /* --- Counter Animation --- */
    function animateCounters() {
        document.querySelectorAll('[data-count]').forEach(function (el) {
            var target = parseInt(el.getAttribute('data-count'));
            var suffix = el.getAttribute('data-suffix') || '';
            var prefix = el.getAttribute('data-prefix') || '';
            var duration = 2000;
            var step = Math.ceil(target / (duration / 16));
            var current = 0;

            function update() {
                current += step;
                if (current >= target) {
                    el.textContent = prefix + target.toLocaleString() + suffix;
                } else {
                    el.textContent = prefix + current.toLocaleString() + suffix;
                    requestAnimationFrame(update);
                }
            }
            update();
        });
    }

    var trustBar = document.querySelector('.trust-bar');
    if (trustBar) {
        var trustObserver = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                animateCounters();
                trustObserver.unobserve(trustBar);
            }
        }, { threshold: 0.3 });
        trustObserver.observe(trustBar);
    }

});
