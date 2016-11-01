import deepcopy from 'deepcopy';

const initialState = {
	userName: "terabaud",
	bugs: [],
	selectedIndex: -1
};

export default function reducer(state = initialState, action) {
	// create a copy of the current state
	const newState = deepcopy(state);
	console.log("Action:", action);
	const actions = {
		"ADD_BUG": () => {
			newState.bugs.push(action.bug);
		},
		"SELECT_ROW": () => {
			newState.selectedIndex = (action.index === state.selectedIndex) ? -1 : action.index;
		},
		"CLOSE_BUG": () => {

		},
		"FORM_SUBMIT": () => {
			
		}
	};
	if (action.type in actions) {
		actions[action.type]();
	}
	return newState;
}
