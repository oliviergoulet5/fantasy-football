import React from 'react';
import DropdownMenu from './DropdownMenu';
import { shallow } from 'enzyme';

describe('rendering DropdownMenu Component', () => {
    it('renders DropdownMenu component without crashing', () => {
        shallow(<DropdownMenu />);
    });

    it('renders all the correct options passed down through props', () => {
        const testCaseOptions = ['A', 'B', 'C'];
        const wrapper = shallow(<DropdownMenu options={ testCaseOptions } />);
        wrapper.find('li').forEach((node, index) => {
            let expected = testCaseOptions[index];
            expect(node.text()).toBe(expected)
        })
    });
});