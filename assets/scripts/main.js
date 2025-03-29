// class OverlayMenu {
//     constructor(headerSelector, options = {}) {
//         this.headerElement = document.querySelector(headerSelector);
//         if (!this.headerElement) {
//             console.error(`Элемент ${headerSelector} не найден!`);
//             return;
//         }

//         this.overlayElement = this.headerElement.querySelector(options.overlaySelector ?? '.js-overlay');
//         this.burgerButtonElement = this.headerElement.querySelector(options.burgetButtonSelector ?? '.js-burger-button');
//         this.links = this.headerElement.querySelectorAll('a[href]');

//         this.animationDuration = options.animationDuration ?? 200;

//         this.bindEvents();
//     }

//     onBurgerButtonClick = () => {
//         this.toggleOverlay();
//     }

//     bindEvents() {
//         this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
//         this.links.forEach(link => link.addEventListener('click', () => this.closeOverlay()));
//     }

//     toggleOverlay() {
//         this.burgerButtonElement.classList.toggle('is-active');
//         document.documentElement.classList.toggle('is-lock');

//         if (this.overlayElement.open) {
//             this.overlayElement.classList.toggle('is-active');
//             setTimeout(() => {
//                 this.overlayElement.open = !this.overlayElement.open;
//             }, this.animationDuration);
//         } else {
//             this.overlayElement.open = !this.overlayElement.open;
//             setTimeout(() => {
//                 this.overlayElement.classList.toggle('is-active');
//             }, 0);
//         }
//     }

//     closeOverlay() {
//         this.burgerButtonElement.classList.remove('is-active');
//         document.documentElement.classList.remove('is-lock');

//         this.overlayElement.classList.remove('is-active');
//         setTimeout(() => {
//             this.overlayElement.open = false;
//         }, this.animationDuration);
//     }

//     openOverlay() {
//         this.burgerButtonElement.classList.add('is-active');
//         document.documentElement.classList.add('is-lock');

//         this.overlayElement.open = true;
//         setTimeout(() => {
//             this.overlayElement.classList.add('is-active');
//         }, 0);
//     }
// }
// new OverlayMenu('.header');

// const animationElements = document.querySelectorAll('.animation');
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animation-start');
//             observer.unobserve(entry.target);
//         }
//     });
// }, {
//     threshold: 0.1,
// });

// animationElements.forEach(element => observer.observe(element))
