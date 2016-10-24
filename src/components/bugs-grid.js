import store from '../store';

// A simple data grid
export default function bugsDataGrid(state) {
	const { bugs, selectedIndex } = state;
	if (bugs.length === 0) {
		return 'Yay, no bugs :-)';
	}
	return `<table>
		<tr><th>ID</th><th>Bug Title</th><th>assigned to</th>
		<th>status</th><th>submitted on</th></tr>
		${bugs.map((bug, index) => `
		<tr${index===selectedIndex?' class="selected"':''}>
			<td>${index}</td>
			<td>${bug.title}</td>
			<td>${bug.assignedTo}</td>
			<td>${bug.state}</td>
			<td>${bug.submitDate}</td>
		</tr>`).join('')}		
	</table>`;
}
