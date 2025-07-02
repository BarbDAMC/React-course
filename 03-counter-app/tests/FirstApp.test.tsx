import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp';

describe('<FirstApp />', () => {
  const title = 'Hola';
  const subtitle = 'mundo';
  const name = 'Barbara';

  test('should match with the snapshot', () => {
    const { container } = render(<FirstApp title={title} subtitle={subtitle} name={name} />)
    expect( container ).toMatchSnapshot();
  })

  test('should show the title', () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />);
    
    expect( screen.getByText(title) ).toBeTruthy();
    expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
  })

  test('should show the subtitle', () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />);
    
    expect( screen.getAllByText(subtitle).length ).toBe(2);
  })
})
