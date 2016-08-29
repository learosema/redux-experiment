import store from '../store';

// A simple example component, where you can add bugs
export default class BugsAddComponent {

	constructor(container) {
		this.container = container;
		this.render();
	}

	get HTML() {
		return `<button class="fileBug" title="file a new bug"> + </button>`;
	}

	render() {
		this.container.innerHTML = this.HTML;
	}

}