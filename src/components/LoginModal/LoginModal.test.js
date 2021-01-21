import React from 'react';
import { shallow } from 'enzyme';
import LoginModal from './LoginModal';

describe.skip('rendering LoginModal component', () => {
    it('renders LoginModal component without crashing', () => {
        shallow(<LoginModal />);
    });

});