import css from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, description }) => {
  return (
    <div><img className={css.imageCard} src={imageUrl} alt={description}/></div>
  )
}

export default ImageCard

