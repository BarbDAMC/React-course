import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');
const useFetchGifsMock = useFetchGifs as jest.Mock;

describe('<GifGrid />', () => {
  const category = 'One punch';

  
  test('should show the loding when first render', () => {
    useFetchGifsMock.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category}/>)

    expect(screen.getByText('Cargando ...'));
    expect(screen.getByText(category));
  })

  test('should show items when the useFetchGifs images load', () => {
    const gifs = [
      {
        id: 1,
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: 2,
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      }
    ];

    useFetchGifsMock.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category}/>)

    expect(screen.getAllByRole('img').length).toBe(2);
  })
  
  

})
