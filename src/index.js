import './styles.scss';
import BugsComponent  from './components/bugs';

class App {

	constructor() {
		const root = document.getElementById('root');
		root.innerHTML = `
			<div class="bugs"></div>
		`;
		const bugs = new BugsComponent(document.querySelector('.bugs'));
	}
}


const app = new App();