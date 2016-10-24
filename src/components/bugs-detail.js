import store from '../store';

// A simple example component for a bug detail view
export default function bugsDetailView(state) {
	const { bugs, selectedIndex } = state;
	if (selectedIndex === -1) {
		return ``;
	}
	return `<h3>${bugs[selectedIndex].title}</h3>`;
}