import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('rendering App component', () => {
    it('renders App component without crashing', () => {
        shallow(<App />);
    });
});