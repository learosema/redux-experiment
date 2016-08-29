import deepcopy from 'deepcopy';

const initialState = {
	users:[{userName: "terabaud"}, {userName: "horst"}],
	bugs:[{title: "It doesn't work"}]
};

export default function reducer(state = initialState, action) {
	// create a copy of the current state
	const newState = deepcopy(state);
	switch (action.type) {
		case 'ADD_USER': 
			newState.userList.push({userName: action.userName});
			return newState;
		case 'REMOVE_USER':
			newState.users = state.users.filter((user) => user.userName != action.userName);
			return newState;
	}
}
