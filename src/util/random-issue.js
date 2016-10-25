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
		'Client',
		'File',
		'Socket',
	].pick() + 
	['', 'Binding', 'Event', 'Function', 'Host', 'Window'].pick() + [
		'Server',
		'Listener',
		'Adapter',
		'Factory',
		'Loop',
		'Dispatcher'
	].pick();
}

function deliciousThing() {
	return ['Oreos', 'coffee', 'ice cream', 'pizza'].pick();
}


export default function randomIssue() {
	return randomThing() + [
		' throws ' + randomException(),
		' fails to connect to ' + randomThing(),
		' just refuses to work',
		' causes ' + randomThing() + ' to crash'
	].pick() + [
		' on mondays',
		' when you click the red button',
		' when you try to save',
		' because of ' + randomException(),
		' on Windows 95',
		' because terabaud is out of ' + deliciousThing()
	].pick();
}