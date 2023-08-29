import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleSearchChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handelFormBtn = e => {
    e.preventDefault();
    this.props.onChangeSearch(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handelFormBtn} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.inputValue}
            onChange={this.handleSearchChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
