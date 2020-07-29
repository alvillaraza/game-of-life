import React from 'react';
// import ReactDom from 'react-dom';
// import { Button } from "react-bootstrap";


class Buttons extends React.Component {
  render() {
    return (
      <div className="center">
          <button className="btn btn-default" onClick={this.props.playButton}>
            Play
          </button>
          <button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </button>
          <button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-default" onClick={this.props.random}>
            Randomize
          </button>
      </div>
    );
  }
}

export default Buttons