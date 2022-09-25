import { StyledBtn } from './Button.styled';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return <StyledBtn onClick={handleLoadMore}>load more</StyledBtn>;
};

export default LoadMoreBtn;
