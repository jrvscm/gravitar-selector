import React from 'react';
import { shallow, mount } from 'enzyme';
import AvatarImage from './AvatarImage';

describe('<UnusedAvatars />', () => {
	
	it('Renders without crashing', () => {
		shallow(<AvatarImage />)
	});
});