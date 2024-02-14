class CreateASplide extends HTMLElement {
    constructor() {
        super();
        this.splideElement = this.querySelector('.splide');
        this.renderSplide();
    }
    renderSplide() {
        // document.addEventListener('DOMContentLoaded', () => {
            // console.log('splideElement');
            const options = JSON.parse(this.getAttribute('data-splide'));
            console.log(options);
            if (this.splideElement) {
                new Splide(this.splideElement, options).mount();
            } else {
                console.error('Splide element not found.');
            }
        // });
    }
}

customElements.define("custom-splide",CreateASplide)