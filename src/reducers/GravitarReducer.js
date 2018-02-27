const initialState = {
	gravitars: [
  		{ "src": "../images/avatar1.png", "label": "Avatar 1", "id": 1 },
  		{ "src": "../images/avatar2.png", "label": "Avatar 2", "id": 2 },
  		{ "src": "../images/avatar3.png", "label": "Avatar 3", "id": 3 },
  		{ "src": "../images/avatar4.png", "label": "Avatar 4", "id": 4 },
  		{ "src": "../images/avatar5.png", "label": "Avatar 5", "id": 5 },
  		{ "src": "../images/avatar6.png", "label": "Avatar 6", "id": 6 }
	],
	currentAvatar: { "src": "../images/avatar1.png", "label": "Avatar 1", "id": 1 }
}


const GravitarReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_AVATAR_IMAGE':
		return {
			...state,
			currentAvatar: action.avatar
		}

		default:
			return state
	}
} 

export default GravitarReducer;