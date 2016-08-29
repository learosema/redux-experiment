import deepcopy from 'deepcopy';

const initialState = {
	users: [{userName: "terabaud"}, {userName: "horst"}],
	bugs: [{title: "It doesn't work"}]
};

export default function reducer(state = initialState, action) {
	// create a copy of the current state
	const newState = deepcopy(state);
	switch (action.type) {
		case 'ADD_BUG': 
			newState.bugs.push(action.bug);
			return newState;
	}
}

