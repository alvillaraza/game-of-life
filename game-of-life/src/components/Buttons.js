import React from 'react';


class Buttons extends React.Component {
  render() {
    return (
      <div className="center">
          <button onClick={this.props.playButton}>
            Play
          </button>
          <button onClick={this.props.pauseButton}>
          Pause
          </button>
          <button onClick={this.props.slow}>
          Slow
          </button>
          <button onClick={this.props.fast}>
            Fast
          </button>
          <button onClick={this.props.clear}>
            Clear
          </button>
          <button onClick={this.props.random}>
            Randomize
          </button>
      </div>
    );
  }
}

export default Buttons