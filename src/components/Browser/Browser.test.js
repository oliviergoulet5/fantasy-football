import React from 'react';
import { shallow } from 'enzyme';
import Browser from './Browser';

describe.skip('rendering Browser component', () => {
    it('renders Browser component without crashing', () => {
        shallow(<Browser />);
    });

});