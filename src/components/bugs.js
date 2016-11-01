import { store } from '../store';
import { $, $$ } from '../util/dollar';
import bugsAddButton from './bugs-add';
import bugsDataGrid from './bugs-grid';
import bugsDetailView from './bugs-detail';
import randomIssue from '../util/random-issue';
import { default as parser } from 'html2hscript';
import { default as h } from 'virtual-dom/h';
import { default as diff } from 'virtual-dom/diff';
import { default as patch } from 'virtual-dom/patch'; 
import { default as createElement } from 'virtual-dom/create-element';

export default class BugsApp {

	constructor() {
		this.render();
	}

	registerEvents() {
		$('.bugs-add').addEventListener("click", (e) => {
			store.dispatch({
				type: "ADD_BUG",
				bug: {
					title: randomIssue(), 
					state: "new", 
					assignedTo: "terabaud", 
					submitDate:new Date().toISOString(), 
					description: randomIssue(10)}
			});
			this.render();
			e.preventDefault();
		});
		$('.bugs-list').addEventListener("click", (e) => {
			console.log("row click!");
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
	}

	get HTML() {
		return `<div class="bugs">
			<h2>VirtualDOM + Redux Bug <s>Tracker</s>Creator</h2>
			${bugsAddButton()}
			${bugsDetailView(store.getState())}
			${bugsDataGrid(store.getState())}
			</div>`;
	}

	render() {
		// ugly hack, but we can simply `eval` hyperscript code
		window.h = h; 
		if (! this.rootNode) {
			// initial render
			parser(this.HTML, (err, hsTree) => {
				this.tree = eval(hsTree);
				this.rootNode = createElement(this.tree);
				document.body.appendChild(this.rootNode);
			})
			this.registerEvents();
		} else {
			// update render
			parser(this.HTML, (err, hScriptNewTree) => {			
				let newTree = eval(hScriptNewTree);
				let patches = diff(this.tree, newTree);
				this.rootNode = patch(this.rootNode, patches);
				this.tree = newTree;
			});
		}
	}
}