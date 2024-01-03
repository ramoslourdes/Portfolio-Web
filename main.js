// ----------------- MOBILE MENU SHOW AND HIDE -----------------

const menuButton = document.getElementById('menu__icon');
const closeButton = document.getElementById('close__icon');
const navMobile = document.getElementById('nav__mobile');

function showMenu() {
    navMobile.style.top = "0";
    closeButton.style.top = "1rem";
}

function hideMenu() {
    navMobile.style.top = "-100%";
    closeButton.style.top = "-100%";
}

menuButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);

// ----------------- MOBILE MENU ITEMS SHOW AND HIDE -----------------

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(item => item.addEventListener('click', function () {
    hideMenu();
}));


// ----------------- HEADER SHADOW -----------------

const nav = document.getElementById('nav');
const home = document.getElementById('home');

window.addEventListener('scroll', function () {
    var scrollPercentage = (window.scrollY / window.innerHeight) * 100;

    if (scrollPercentage > 50) {
        console.log("you did it");
        nav.style.boxShadow = "0px 2px 10px var(--black-color-light)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// ----------------- ACTIVE LINKS -----------------

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    this.document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = section.offsetTop + section.offsetHeight;

        if (scrollPosition >= (sectionTop - 100) && scrollPosition < sectionBottom) {
            const currentSectionId = section.id;

            navLink.forEach(link => {
                const linkTarget = link.getAttribute('href').substring(1);
                if (linkTarget === currentSectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    })
});

// ----------------- EMAILJS -----------------

const contactForm = document.getElementById('contact__form');
const contactMessage = document.querySelector('.contactMessage');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_83q42sr', 'template_991012d', '#contact__form', 'avy0r13a3uZVLoWjj')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();

        }, () => {
            contactMessage.textContent = 'Message not sent (service error)';
        });
});

// ----------------- DARK MODE -----------------

document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    const darkmodeButton = document.querySelector('.darkmode__button');
    const body = document.body;

    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    if (isDarkMode) {
        body.classList.add('darkmode');
        darkmodeButton.classList.add('ri-sun-line');
    }
    darkmodeButton.addEventListener('click', function (e) {
        e.preventDefault();
        body.classList.toggle('darkmode');

        if (body.classList.contains('darkmode')) {
            localStorage.setItem('darkMode', 'enabled');
            if (darkmodeButton.classList.contains('ri-sun-line')) {
                darkmodeButton.classList.remove('ri-sun-line');
                darkmodeButton.classList.add('ri-moon-line');
            }
        } else {
            localStorage.removeItem('darkMode');
            if (darkmodeButton.classList.contains('ri-moon-line')) {
                darkmodeButton.classList.remove('ri-moon-line');
                darkmodeButton.classList.add('ri-sun-line');
            }
        }
    });
});

// ----------------- SCROLL UP BUTTON -----------------

const goHome = document.querySelector('.gohome__button');
const homeSection = document.getElementById('home');

window.addEventListener('scroll', function (e) {
    e.preventDefault();
    if (this.window.scrollY < homeSection.offsetHeight) {
        goHome.style.bottom = '-5rem';
    } else {
        goHome.style.bottom = '5rem';
    }
});

// ----------------- SCROLL REVEAL -----------------

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '1000',
    delay: 400,
});

sr.reveal(`.home__perfil, .about__name, .about__info, .contact__mail`, { origin: 'right' });
sr.reveal(`.home__name, .home__info, .about__perfil, .contact__card, .contact__social`, { origin: 'left' });

sr.reveal(`.services__card, .projects__card`, { interval: 100 });