import test from 'tape';

// there's even nothing useful to test here, yet
test('Date.now is a function', (t) => {
	t.plan(1);
	t.equal(typeof Date.now, 'function');
});
