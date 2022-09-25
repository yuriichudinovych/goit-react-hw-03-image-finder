import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, StyledModal } from './Modal.style';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay className="overlay" onClick={this.handleOverlayClick}>
        <StyledModal className="modal">{this.props.children}</StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}
