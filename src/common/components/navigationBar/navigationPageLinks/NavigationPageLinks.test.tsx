import 'jest-extended';
import { NavigationPageLinks } from '../NavigationPageLinks';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

const mainPages = ['Page A', 'Page B', 'Page C'];

jest.mock('./MAIN_PAGES', () => mainPages);

describe('NavigationPageLinks component', () => {
    test('renders successfully', () => {
        expect(render(<NavigationPageLinks currentPage='stats' />)).not.toBeNull();
    });

    test('renders main pages', () => {
        const { getAllByTestId } = render(<NavigationPageLinks currentPage='stats' />);

        getAllByTestId('pagelink-p-text').forEach((pageLinkText) => {
            expect(pageLinkText.textContent).toBeOneOf(mainPages);
        });
    });
});