import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.imageArr.map(image => (
          <ImageGalleryItem
            onModalClick={this.props.onModalClick}
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            largeImageURL={image.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
