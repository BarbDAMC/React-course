import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('<GifItem />', () => {
  const testingImage = {
    id: 'testing-id',
    url: 'https://testing-url.png',
    title: 'testing-title'
  }


  test('Shoul match with the snashot', () => {
    const { container } = render(<GifItem {...testingImage}/>);
    expect(container).toMatchSnapshot();
  })

  test('should show the image with the defined url and alt text', () => {
    render(<GifItem {...testingImage}/>);

    const {src, alt} = screen.getByRole('img') as HTMLInputElement;

    expect(src).toBe('https://testing-url.png/');
    expect(alt).toBe('testing-title');
  })

  test('should render the title as a paragraph', () => {
    render(<GifItem {...testingImage}/>);

    expect(screen.getByText('testing-title')).toBeTruthy();
  })
  
  

})
