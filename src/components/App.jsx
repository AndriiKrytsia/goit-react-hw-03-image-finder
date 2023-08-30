import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import { getImages } from '../helpers/imageApi';
import { Button } from './Button';
import { Modal } from './Modal';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    isError: false,
    isLoader: false,
    page: 1,
    isModalOpen: false,
    modalImage: null,
    isShowBtn: false,
  };

  handelOpenModal = imageBig => {
    this.setState({ isModalOpen: true, modalImage: imageBig });
  };
  handelCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handelPageUpdate = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSearchValue = searchValue => {
    this.setState({
      searchValue,
      page: 1,
      images: [],
      isError: false,
      isLoader: false,
      isModalOpen: false,
      modalImage: null,
      isShowBtn: false,
    });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoader: true });
        const responImages = await getImages(
          this.state.searchValue,
          this.state.page
        );
        if (responImages.totalHits === 0) {
          return alert('Try now!!!');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...responImages.hits],
          isShowBtn: Math.ceil(responImages.totalHits / 12) > this.state.page,
        }));
      } catch (error) {
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }

  render() {
    const { images, isLoader, isModalOpen, modalImage, isShowBtn } = this.state;
    return (
      <div className="App">
        <Searchbar onChangeSearch={this.handleSearchValue} />
        <ImageGallery imageArr={images} onModalClick={this.handelOpenModal} />
        {isModalOpen && (
          <Modal
            modalImageBig={modalImage}
            handelCloseModal={this.handelCloseModal}
          />
        )}
        {isShowBtn && <Button onClickLoadMore={this.handelPageUpdate} />}
        {isLoader && <Loader />}
      </div>
    );
  }
}
