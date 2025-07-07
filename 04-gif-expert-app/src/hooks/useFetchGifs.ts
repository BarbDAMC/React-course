import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import type { Image } from "../helpers/gifImageInterface";


export const useFetchGifs = (category: string) => {
   const [images, setImages] = useState<Image[]>([]);
   const [isLoading, setIsLoading] = useState(true);

  const getImages = async() =>{
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, [category])


  return {
    images,
    isLoading
  }
}
