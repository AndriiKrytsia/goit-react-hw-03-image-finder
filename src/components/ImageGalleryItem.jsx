import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { onModalClick, webformatURL, largeImageURL, tags } = this.props;
    return (
      <li onClick={() => onModalClick({ largeImageURL, tags })}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  }
}
