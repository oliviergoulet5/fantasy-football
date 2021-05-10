import 'jest';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

describe('dropdown component', () => {
    const options = ['Any', 'Option A', 'Option B', 'Option C'];
    const mockLiftSelectedOptionValue = jest.fn();

    test('loads component successfully', () => {
        render(<Dropdown options={ options } liftSelectedOption={ mockLiftSelectedOptionValue } />);
        expect(screen.getByTestId('dropdown')).not.toBeNull();
    });

    test('loads and displays options', async () => {
        const { getByTestId } = render(<Dropdown options={ options } liftSelectedOption={ mockLiftSelectedOptionValue }/>);
        expect(getByTestId('dropdown-p-selected').textContent).toBe('Any');
    });

    test('click and expand option list', async () => {
        const { getByTestId } = render(<Dropdown options={ options } liftSelectedOption={ mockLiftSelectedOptionValue } />);
        fireEvent.click(screen.getByTestId('dropdown-div-menu'));
        expect(screen.getByTestId('dropdown-ul-optionlist').childElementCount).toBe(options.length);
    });
});