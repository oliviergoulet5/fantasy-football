import React from 'react';
import { shallow } from 'enzyme';
import AdvancedBrowser from './AdvancedBrowserFilters';

describe.skip('rendering AdvancedBrowser component', () => {
    it('renders AdvancedBrowser component without crashing', () => {
        shallow(<AdvancedBrowser />);
    });
});