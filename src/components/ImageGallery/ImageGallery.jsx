import ImageGalleryItem from 'components/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

import PropTypes from 'prop-types';

const ImageGallery = ({ items, onClick }) => {
  return (
    <StyledImageGallery className="gallery">
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onClick={onClick}
            largeImg={largeImageURL}
          />
        );
      })}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array,
  id: PropTypes.array,
};

export default ImageGallery;
