import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from '../../src/components/AddCategory';

describe('<AddCategory />', () => {

  test('should change the value on the textbox', () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'Sailor moon'} });

    expect(input.value).toBe('Sailor moon');
  });

  test('should call onNewCategory if the input has a value', () => {
    const inputValue = 'Sailor Moon';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue} });
    fireEvent.submit( form );

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);

  });

  test('should not call onNewCategory if the input is empty', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: ''} });
    fireEvent.submit( form );

    expect(onNewCategory).not.toHaveBeenCalled();
  });

})
