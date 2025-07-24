import 'whatwg-fetch';
import fetch from 'cross-fetch';
import type { ImageResponse } from "./gifImageInterface";

export const getGifs = async (category: string ) => {
  const url = `${import.meta.env.VITE_API_URL}/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${category}&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map((img : ImageResponse) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    
    
    return gifs;
  }