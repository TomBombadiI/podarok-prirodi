import Modal from './Modal.js';

class OverlayMenu {
    constructor(overlayContainer, options = {}) {
        this.headerElement = document.querySelector(overlayContainer);
        if (!this.headerElement) {
            console.error(`Элемент ${overlayContainer} не найден!`);
            return;
        }

        this.overlayElement = this.headerElement.querySelector(options.overlaySelector ?? '[data-js-overlay]');
        this.burgerButtonElement = this.headerElement.querySelector(options.burgetButtonSelector ?? '[data-js-overlay-burger-button]');
        this.links = this.headerElement.querySelectorAll('a[href]');

        this.animationDuration = options.animationDuration ?? 200;

        this.bindEvents();
    }

    onBurgerButtonClick = () => {
        this.toggleOverlay();
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
        this.links.forEach(link => link.addEventListener('click', () => this.closeOverlay()));
    }

    toggleOverlay() {
        this.burgerButtonElement.classList.toggle('is-active');
        document.documentElement.classList.toggle('is-lock');

        if (this.overlayElement.open) {
            this.overlayElement.classList.toggle('is-active');
            setTimeout(() => {
                this.overlayElement.open = !this.overlayElement.open;
            }, this.animationDuration);
        } else {
            this.overlayElement.open = !this.overlayElement.open;
            setTimeout(() => {
                this.overlayElement.classList.toggle('is-active');
            }, 0);
        }
    }

    closeOverlay() {
        this.burgerButtonElement.classList.remove('is-active');
        document.documentElement.classList.remove('is-lock');

        this.overlayElement.classList.remove('is-active');
        setTimeout(() => {
            this.overlayElement.open = false;
        }, this.animationDuration);
    }

    openOverlay() {
        this.burgerButtonElement.classList.add('is-active');
        document.documentElement.classList.add('is-lock');

        this.overlayElement.open = true;
        setTimeout(() => {
            this.overlayElement.classList.add('is-active');
        }, 0);
    }
}
new OverlayMenu('[data-js-overlay-container]');

const headerElement = document.querySelector('header');
const toggleHeader = () => {
    if (window.scrollY > 10) {
        headerElement.classList.add('has-scroll');
    } else {
        headerElement.classList.remove('has-scroll');
    }
}

toggleHeader();
document.addEventListener('scroll', () => {
    toggleHeader();
});

new Modal('#knowledge-modal', {
    animationDuration: 400,
});

new Modal('#policy-modal', {
    animationDuration: 400,
});

const animationElements = document.querySelectorAll('.animation');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-end');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
});

animationElements.forEach(element => {
    observer.observe(element);

    const animationDelay = element.dataset.animationDelay ?? 0;
    element.style.transitionDelay = animationDelay + 'ms';
})

const sections = document.querySelectorAll('footer[id],section[id]');
const menuLinks = document.querySelectorAll('.header__menu-link');

const observerMenu = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;

            menuLinks.forEach(link => link.classList.remove('is-active'));

            const activeLink = document.querySelector(`.header__menu-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('is-active');
        }
    });
}, {
    rootMargin: '-50% 0px -50% 0px', // срабатывание, когда секция в середине экрана
    threshold: 0
});

sections.forEach(section => observerMenu.observe(section));
