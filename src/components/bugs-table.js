import store from '../store';

// A simple example component, where you can add bugs
export default class BugsTableComponent {

	constructor(container) {
		this.container = container;
		this.render();
	}

	get HTML() {
		return `<table>
			<tr><th>Bug description</th><th>assigned to</th><th>status</th><th>submitted on</th></tr>
		</table>`;
	}

	render() {
		this.container.innerHTML = this.HTML;
	}

}