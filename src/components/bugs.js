import store from '../store';
import { $, $$ } from '../util/dollar';
import BugsFormComponent from './bugs-form';
import BugsTableComponent from './bugs-table';
import BugsDetailComponent from './bugs-detail';

// A simple example component, where you can add and remove users 
export default class BugsComponent {

	constructor(container) {
		this.container = container;
		this.render();
		this.bugsForm = new BugsFormComponent($('.bugs-form', this.container));
		this.bugsTable = new BugsTableComponent($('.bugs-table', this.container));
		this.bugsDetail = new BugsDetailComponent($('.bugs-detail', this.container));
	}

	get HTML() {
		return `
			<h2>Bugs List</h2>
			<section class="bugs-form">
				${this.bugsForm?this.bugsForm.HTML:""}
			</section>
			<section class="bugs-table">${this.bugsTable?this.bugsTable.HTML:""}</section>
			<section class="bugs-detail">${this.bugsDetail?this.bugsDetail.HTML:""}</section>`;
	}

	render() {
		this.container.innerHTML = this.HTML;
	}

}