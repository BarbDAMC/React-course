import type { Image } from "../helpers/gifImageInterface"


export const GifItem = ({ title, url }: Image) => {

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
