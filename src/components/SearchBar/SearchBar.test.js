import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe.skip('rendering SearchBar component', () => {
    it('renders SearchBar component without crashing', () => {
        shallow(<SearchBar />);
    });
});