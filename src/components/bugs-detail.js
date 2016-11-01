import store from '../store';

// A simple example component for a bug detail view
export default function bugsDetailView(state) {
	const { bugs, selectedIndex } = state;
	
	const bug = selectedIndex < 0 ? {} : bugs[selectedIndex];
	return `<p style="display: ${selectedIndex < 0 ? "none" : "block"}">
			<form name="bugsForm">
			<h3>#${selectedIndex}: ${bug.title}</h3>
			<table>
				<tr><th><label>Assigned to:</label></th><td><input name="assignedTo" value="${bug.assignedTo}"></td></tr>
				<tr><th>Status</th><td>${bug.state}</td></tr>
				<tr><th>Description</th><td>
					<textarea name="description">${bug.description}</textarea>
				</td></tr>
			</table>
			</form>
		</p>`;
}