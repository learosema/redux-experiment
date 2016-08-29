import store from '../store';

// A simple example component, where you can add bugs
export default class BugsFormComponent {

	constructor(container) {
		this.container = container;
		this.render();
	}

	get HTML() {
		return `<p><input placeholder="add bug"><button>add</button></p>`;
	}

	render() {
		this.container.innerHTML = this.HTML;
	}

}