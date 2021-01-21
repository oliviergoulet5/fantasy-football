import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe.skip('rendering Filter component', () => {
    it('renders Filter component without crashing', () => {
        shallow(<Filter />);
    });

});