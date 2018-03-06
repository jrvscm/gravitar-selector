import React from 'react';
import { shallow, mount } from 'enzyme';
import AvatarImage from './AvatarImage';

describe('<AvatarImage />', () => {
	it('Renders without crashing', () => {
		shallow(<AvatarImage />)
	});

	it('Renders the image', () => {
        const wrapper = shallow(
        	<AvatarImage
        	className={'current'}
          	src={require(`../images/avatar1.png`)}
          	label={'avatar 1'}
          	id={1}
          	alt={"selected-avatar-image"} />
        );
        expect(wrapper.contains(
        	<img 
        	className={'current'}
        	src={require(`../images/avatar1.png`)}
          	label={'avatar 1'}
          	id={1}
          	alt={"selected-avatar-image"} />
        	)).toEqual(true);
    });
});