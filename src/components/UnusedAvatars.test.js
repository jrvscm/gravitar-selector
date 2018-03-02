import React from 'react';
import { shallow, mount } from 'enzyme';
import UnusedAvatars from './UnusedAvatars';

describe('<UnusedAvatars />', () => {
	const state = {
		loading: false, 
    	currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
    	gravatars: [
  			{ "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
  			{ "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
  			{ "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
  			{ "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
  			{ "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
  			{ "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
		],
    	hidden:true,
   		firstLoad: true
	}

	it('Renders without crashing', () => {
		const wrapper = shallow(
			<UnusedAvatars
			loading={state.loading}
			currentAvatar={state.currentAvatar}
			gravatars={state.gravatars}
			hidden={state.hidden}
			firstLoad={state.firstLoad} />)
	});
});