

const getImage = async() => {
  try {
    const apiKey = '5cgqB0zIsH8GDro9kfvAnYBySPQUZh7B';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await resp.json();
    const { url } = data.images.original;
  
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)

  } catch (err) {
    console.error("🚀 ~ getImage ~ err:", err)
  }
}


getImage();
