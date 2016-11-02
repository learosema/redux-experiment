import store from '../store';

// A simple data grid
export default function bugsDataGrid(state) {
	const { bugs, selectedIndex } = state;
	return `<div class="bugs-list"><table>
		<tr><th>ID</th><th>Bug Title</th><th>assigned to</th>
		<th>status</th><th style="text-align: right">submitted on</th></tr>
		${bugs.map((bug, index) => `
		<tr${index===selectedIndex?' class="selected"':''} id="bug_${bug.id}">
			<td>${bug.id}</td>
			<td><a href="#${bug.id}">${bug.title}</a></td>
			<td><a href="#${bug.id}">${bug.assignedTo}</a></td>
			<td>${bug.state}</td>
			<td style="text-align: right">${new Intl.DateTimeFormat().format(bug.submitDate)}</td>
		</tr>`).join('')}	
		${bugs.length=== 0 ?'<tr><td colspan="5">Yay, no bugs :-)</td></tr>':''}
	</table></div>`;
}
