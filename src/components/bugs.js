import { store } from '../store';
import { $, $$ } from '../util/dollar';
import ComponentBase from '../util/component-base';
import bugsAddButton from './bugs-add';
import bugsDataGrid from './bugs-grid';
import bugsDetailView from './bugs-detail';

export default class BugsApp extends ComponentBase {

	constructor() {
		super();
		this.render();
	}

	registerEvents() {
		$('.bugs-add').addEventListener("click", (e) => {
			store.dispatch({type: "ADD_BUG"});
			this.render();
			e.preventDefault();
		});
		$('.bugs-list').addEventListener("click", (e) => {
			const tr = e.target.nodeName === 'TD' ? 
				e.target.parentNode : e.target;
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
		});
		window.addEventListener("keyup", (e) => {
			if (e.target.nodeName === "TEXTAREA" || 
			    e.target.nodeName === "INPUT") {
				return;
			}
			if (e.keyCode === 38 || e.keyCode == 40) {
				store.dispatch({type: "KEYBOARD_NAV", dir: -(39 - e.keyCode)})
			}
			this.render();
		})
	}

	get HTML() {
		return `<div class="bugs">
			<h2>VirtualDOM + Redux Bug <s>Tracker</s>Creator</h2>
			${bugsAddButton()}
			${bugsDetailView(store.getState())}
			${bugsDataGrid(store.getState())}
			</div>`;
	}
}