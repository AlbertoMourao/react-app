import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('should render the text prop', () => {
        render(<Button text="Meu botão" onClick={() => {}} />);

        expect(screen.getByText('Meu botão')).toBeVisible();
    });

    it('should invoke onClick prop function', () => {
        const mockFunction = jest.fn();
        render(<Button text="Meu botão" onClick={mockFunction} />);

        fireEvent.click(screen.getByText('Meu botão'));

        expect(mockFunction).toHaveBeenCalled();
    });
});