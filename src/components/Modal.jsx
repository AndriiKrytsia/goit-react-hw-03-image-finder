import { Component } from 'react';

export class Modal extends Component {
  handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.handelCloseModal();
    }
  };

  handleEscapeClose = e => {
    if (e.key === 'Escape') {
      this.props.handelCloseModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscapeClose);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapeClose);
  }

  render() {
    return (
      <div onClick={this.handleBackdropClose} className="Overlay">
        <div className="Modal">
          <img
            src={this.props.modalImageBig.largeImageURL}
            alt={this.props.modalImageBig.tags}
          />
        </div>
      </div>
    );
  }
}
