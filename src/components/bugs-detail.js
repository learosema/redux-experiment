import store from '../store';

// A simple example component, where you can add bugs
export default class BugsDetailComponent {

	constructor(container) {
		this.container = container;
		this.render();
	}

	get HTML() {
		return `<h3>Detail view</h3>`;
	}

	render() {
		this.container.innerHTML = this.HTML;
	}

}