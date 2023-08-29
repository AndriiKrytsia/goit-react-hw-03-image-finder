import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import axios from 'axios';
import { Button } from './Button';
import { Modal } from './Modal';
import { Loader } from './Loader';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '38627357-1628736c94afded4ff66c6ede',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
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
    this.setState({ searchValue });
    this.setState({ page: 1 });
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoader: true });
        const response = await axios.get('', {
          params: { q: this.state.searchValue, page: this.state.page },
        });
        this.setState(prevState => ({
          images:
            prevState.page > 1
              ? [...prevState.images, ...response.data.hits]
              : response.data.hits,
          isShowBtn:
            response.data.totalHits > 0 &&
            Math.ceil(response.data.totalHits / 12) > this.state.page,
        }));
      } catch (error) {
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }

  render() {
    const {
      images,
      searchValue,
      isError,
      isLoader,
      page,
      isModalOpen,
      modalImage,
      isShowBtn,
    } = this.state;
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
