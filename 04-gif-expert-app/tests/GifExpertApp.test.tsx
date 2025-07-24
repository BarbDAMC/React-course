import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';

describe('<GifExpertApp />', () => {
  beforeEach(() => {
    render(<GifExpertApp />);
  })

  test('should render the app title', () => {
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe('GifExpertApp');
  });

  test('should render <AddCategory /> component', () => {
    expect(screen.getByPlaceholderText('Buscar gifs'));
  });

  test('should render <GifGrid /> component', () => {
    expect(screen.getByRole('heading', {level: 3}).innerHTML).toBe('One Punch');
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe('Cargando ...');
  });
  
  test('should prevent to add duplicated categories', () => {
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'One Punch'} });
    fireEvent.submit(form);

    const categoryHeaders = screen.getAllByRole('heading', {level: 3});
    expect(categoryHeaders.length).toBe(1);
  });
});
