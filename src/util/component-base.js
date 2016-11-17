import { default as parser } from 'html2hscript'; 
import { default as h } from 'virtual-dom/h'; 
import { default as diff } from 'virtual-dom/diff'; 
import { default as patch } from 'virtual-dom/patch';  
import { default as createElement } from 'virtual-dom/create-element'; 

// ugly hack, so we can simply `eval` hyperscript code
window.h = h;

export default class ComponentBase {

	registerEvents() {
	}

	get HTML() {
		return "";
	}

	render() {
		 
		if (! this.rootNode) {
			// initial render
			parser(this.HTML, (err, hyperScript) => {
				this.tree = eval(hyperScript);
				this.rootNode = createElement(this.tree);
				document.body.appendChild(this.rootNode);
			});
			this.registerEvents();
		} else {
			// update render
			parser(this.HTML, (err, hyperScript) => {			
				let newTree = eval(hyperScript);
				let patches = diff(this.tree, newTree);
				this.rootNode = patch(this.rootNode, patches);
				this.tree = newTree;
			});
		}
	}
}