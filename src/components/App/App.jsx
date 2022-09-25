import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import { searchItems } from 'services/api';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';

import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader';
import { StyledApp } from './App.styled';

export default class App extends Component {
  state = {
    items: [],
    itemName: '',
    isLoading: false,
    page: 1,
    totalItems: 0,
    modalOpen: false,
    largeImageURL: '',
    error: null,
  };

  getItemName = itemName => {
    this.setState(prevState => {
      if (prevState.itemName === itemName) {
        return;
      }

      return {
        itemName,
        items: [],
        page: 1,
      };
    });
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  async componentDidUpdate(_, prevState) {
    const { itemName, page } = this.state;

    if (
      (itemName && prevState.itemName !== itemName) ||
      prevState.page < page
    ) {
      this.setState({ isLoading: true });

      try {
        const data = await searchItems(itemName, page);
        this.setState(({ items }) => {
          return {
            items: [...items, ...data.hits],
            totalItems: data.totalHits,
          };
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  openModal = largeImageURL => {
    this.setState({
      modalOpen: true,
      largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      largeImageURL: '',
    });
  };

  render() {
    const { items, isLoading, largeImageURL } = this.state;
    return (
      <StyledApp>
        {this.state.modalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.getItemName} />
        {items.length > 0 && (
          <>
            <ImageGallery items={items} onClick={this.openModal} />
          </>
        )}
        {!isLoading && items.length > 0 && items.length < 500 && (
          <Button handleLoadMore={this.loadMore} />
        )}
        {isLoading && <Loader />}
      </StyledApp>
    );
  }
}
