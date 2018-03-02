import React from 'react';
import { shallow, mount } from 'enzyme';
import AvatarImage from './AvatarImage';

it('Renders without crashing', () => {
	shallow(<AvatarImage />)
});