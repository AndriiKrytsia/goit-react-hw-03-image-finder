import { Component } from 'react';
import { RotatingSquare } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <div className="Overlay">
        <RotatingSquare color="#3503ff" width="250" height="250" />
      </div>
    );
  }
}
