import deepcopy from 'deepcopy';

const initialState = {
	userName: "terabaud",
	bugs: [],
	selectedIndex: -1
};

export default function reducer(state = initialState, action) {
	// create a copy of the current state
	// I'm using deepcopy here because the object spread operator is 
	// not supported yet by Visual Studio Code.
	// Using deepcopy instead of Object.assign also clones
	// non-primitive properties such as arrays and objects.
	const newState = deepcopy(state);
	console.log("Action:", action);
	const actions = {
		"ADD_BUG": () => {
			newState.bugs.splice(0, 0, action.bug);
			newState.selectedIndex = 0;
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
