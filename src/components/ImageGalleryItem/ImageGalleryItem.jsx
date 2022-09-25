import {
  StyledImageGalleryItem,
  StyledGalleryImg,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, onClick, largeImg }) => {
  return (
    <StyledImageGalleryItem
      onClick={() => onClick(largeImg)}
      className="gallery-item"
    >
      <StyledGalleryImg src={webformatURL} alt="" />
    </StyledImageGalleryItem>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImg: PropTypes.string,
};
export default ImageGalleryItem;
