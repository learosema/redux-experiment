import store from '../store';
import { $, $$ } from '../util/dollar';
import bugsAddComponent from './bugs-add';
import bugsDataGrid from './bugs-table';
import bugsDetailView from './bugs-detail';

export default class BugsApp {

	constructor(container) {
		this.container = container;
		this.render();
	}

	get HTML() {
		return `
			<h2>Bugs List</h2>
			`;
	}

	render() {
		this.container.innerHTML = this.HTML;
	}

}