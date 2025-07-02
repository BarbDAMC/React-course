import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from '../src/CounterApp';

describe('<CounterApp />', () => {
  const initValue = 10;
  
  test('should match with the snapshot', () => {
    const { container } = render(<CounterApp value={initValue} />);
    expect( container ).toMatchSnapshot();
  })

  test('should show 100 as init value', () => {
    render(<CounterApp value={100} />);
    expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100');
  })
  
  test('should increase with the button +1', () => {
    render(<CounterApp value={initValue} />);

    const increaseButton = screen.getByText('+1')
    fireEvent.click(increaseButton);

    expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('11');
  })

  test('should decrease with the button -1', () => {
    render(<CounterApp value={initValue} />);

    const decreaseButton = screen.getByText('-1')
    fireEvent.click(decreaseButton);

    expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('9');
  })

  test('should comeback to the init value with the button reset', () => {
    render(<CounterApp value={initValue} />);

    const decreaseButton = screen.getByText('-1')
    fireEvent.click(decreaseButton);

    const resetButton = screen.getByRole('button', {name: 'btn-reset'})
    fireEvent.click(resetButton);

    expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain(initValue.toString());
  })
  
  
  

})
