import { store } from '../store';
import { $, $$ } from '../util/dollar';
import bugsAddButton from './bugs-add';
import bugsDataGrid from './bugs-grid';
import bugsDetailView from './bugs-detail';
import randomIssue from '../util/random-issue';

export default class BugsApp {

	constructor(container) {
		this.container = container;
		console.log("BugsApp created!");
		this.render();
	}

	registerEvents() {
		$$('.bugs-add').map(b => b.addEventListener("click", (e) => {
			store.dispatch({
				type: "ADD_BUG",
				bug: {title: randomIssue(), state: "new", assignedTo: "terabaud", submitDate:"2016-10-24"}
			});
			this.render();
			e.preventDefault();
		}));
		$$('table').map(t => t.addEventListener("click", (e) => {
			console.log("row click!");
			const tr = e.target.nodeName === 'TD' ? e.target.parentNode : e.target;
			if (tr.nodeName !== 'TR') {
				return;
			}
			const rows = $$('tr', tr.parentNode);
			const newIndex = (rows.indexOf(tr) - 1);
			if (newIndex > -1) {
				store.dispatch({
					type: "SELECT_ROW",
					index: newIndex
				});
				this.render();
			}
		}));
	}

	get HTML() {
		return `
			<div class="bugs">
			<h2>Simple & stupid VanillaJS + Redux Bug Tracker</h2>
			${bugsAddButton()}
			${bugsDataGrid(store.getState())}
			${bugsDetailView(store.getState())}
			</div>
		`;
	}

	render() {
		const $bugs = $('.bugs');
		const oldScrollTop = $bugs? $bugs.scrollTop : 0;
		this.container.innerHTML = this.HTML;
		this.registerEvents();
		if ($bugs) $bugs.scrollTop = oldScrollTop;
	}
}