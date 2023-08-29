import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { onModalClick, webformatURL, largeImageURL, tags } = this.props;
    return (
      <li
        className="ImageGalleryItem"
        onClick={() => onModalClick({ largeImageURL, tags })}
      >
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    );
  }
}
