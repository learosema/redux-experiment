import './array-pick';

function randomException() {
	return [
		'NullReference',
		'Monday',
		'NotEnoughMotivation',
		'BufferOverflow'
	].pick() + "Exception";
}

function randomThing() {
	return [
		'Main',
		'Mouse',
		'Keyboard',
		'Data',
		'Client'
	].pick() + 
	['', 'Binding', 'Event', 'Function', 'Host', 'Window'].pick() + [
		'EventListener',
		'Adapter',
		'Factory',
		'Loop',
		'Dispatcher'
	].pick();
}

export default function randomIssue() {
	return randomThing() + [
		' throws ' + randomException(),
		' fails to connect to ' + randomThing(),
		' just refuses to work',
		' causes ' + randomThing() + ' to crash'
	].pick();
}