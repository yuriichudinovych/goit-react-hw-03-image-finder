import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchBtn,
  StyledBiSearch,
  StyledSearchFormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    itemName: '',
  };

  handleItemNameChange = e => {
    this.setState({ itemName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.itemName.trim() === '') {
      Notify.info('Please fill in the form');
      return;
    }

    this.props.onSubmit(this.state.itemName);
    this.setState({ itemName: '' });
  };

  render() {
    return (
      <StyledSearchbar className="searchbar">
        <StyledSearchForm className="form" onSubmit={this.handleSubmit}>
          <StyledSearchBtn type="submit" className="button">
            <StyledBiSearch />
          </StyledSearchBtn>

          <StyledSearchFormInput
            name="inputValue"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.itemName}
            onChange={this.handleItemNameChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}
