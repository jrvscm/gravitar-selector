const initialState = {
	gravatars: [
  		{ "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
  		{ "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
  		{ "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
  		{ "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
  		{ "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
  		{ "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
	],
	currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
	hidden: true,
	loading: false,
	firstLoad: true
}


const GravatarReducer = (state = initialState, action) => {
	switch(action.type) {

		case 'SHOW_AVATAR_SELECTOR':
		return {
			...state,
			hidden: false
		}

		case 'HIDE_AVATAR_SELECTOR':
		return {
			...state,
			hidden: true
		}

		case 'UPDATE_CURRENT_AVATAR':
		return {
			...state,
			currentAvatar: {...state.gravatars[action.i]}
		}

		case 'SET_LOADING':
		return {
			...state,
			loading: true
		}

		case 'STOP_LOADING':
		return {
			...state,
			loading: false
		}

		case 'FIRST_LOAD':
		return {
			...state,
			firstLoad: false
		}

		default:
			return state
	}
} 

export default GravatarReducer;