import store from '../store';

// A simple data grid
export default function bugsDataGrid(bugs) {
	return `<table>
		<tr><th>Bug Title</th><th>assigned to</th>
		<th>status</th><th>submitted on</th></tr>
		<tr>
		${bugs.map((bug) => `
			<td>${bug.title}</td>
			<td>${bug.assignedTo}</td>
			<td>${bug.status}</td>
			<td>${bug.submitDate}
		`).join('</tr><tr>')}
		</tr>
	</table>`;
}
