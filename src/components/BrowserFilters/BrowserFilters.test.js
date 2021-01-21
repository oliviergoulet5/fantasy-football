import React from 'react';
import { shallow } from 'enzyme';
import BrowserFilters from './BrowserFilters';

describe.skip('rendering BrowserFilters component', () => {
    it('renders BrowserFilters component without crashing', () => {
        shallow(<BrowserFilters />);
    });

});