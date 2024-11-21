import ImageCard from '../ImageCard/ImageCard';
import css from "./ImageGallery.module.css";

const ImageGallery = ({photos, onPhotoClick}) => {
  return (
	  <div>
		  <ul className={css.imageGallery}>
			
			  {photos.map((photo) => (<li key={photo.id} onClick= {()=> onPhotoClick(photo)}><ImageCard imageUrl={photo.urls.small}
				  description={photo.alt_description || 'No description available'}
				  onClick={() => onPhotoClick(photo)}/></li>))}
			 
		  </ul>
	  </div>
  )
}

export default ImageGallery
