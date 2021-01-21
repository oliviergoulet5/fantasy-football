import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';

describe.skip('rendering NavigationBar component', () => {
    it('renders NavigationBar component without crashing', () => {
        shallow(<NavigationBar />);
    });

});