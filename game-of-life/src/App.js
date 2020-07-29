import React from 'react';
import './App.css';

import Buttons from './components/Buttons'
import Grid from './components/Grid'




class App extends React.Component {
  constructor() {
    super();
    this.speed = 250;
    this.rows = 20;
    this.cols = 40;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false)),
    };
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy,
    });
  };

  random = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let k = 0; k < this.cols; k++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][k] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy,
    });
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  clear = () => {
    // clearInterval(this.intervalId);
    var grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));
    this.setState({ gridFull: grid, generation: 0 });

  };


  play = () => {
    let grid1 = this.state.gridFull;
    let grid2 = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let k = 0; k < this.cols; k++) {
        let count = 0;
        if (i > 0) if (grid1[i - 1][k]) count++;
        if (i > 0 && k > 0) if (grid1[i - 1][k - 1]) count++;
        if (i > 0 && k < this.cols - 1) if (grid1[i - 1][k + 1]) count++;
        if (k < this.cols - 1) if (grid1[i][k + 1]) count++;
        if (k > 0) if (grid1[i][k - 1]) count++;
        if (i < this.rows - 1) if (grid1[i + 1][k]) count++;
        if (i < this.rows - 1 && k > 0) if (grid1[i + 1][k - 1]) count++;
        if (i < this.rows - 1 && k < this.cols - 1)
          if (grid1[i + 1][k + 1]) count++;
        if (grid1[i][k] && (count < 2 || count > 3)) grid2[i][k] = false;
        if (!grid1[i][k] && count === 3) grid2[i][k] = true;
      }
    }
    this.setState({
      gridFull: grid2,
      generation: this.state.generation + 1,
    });
  };

  componentDidMount() {
    this.random();
    this.playButton();
  }

  render() {
    return (
      <div>
        <h1> The Game of Life</h1>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          clear={this.clear}
          random={this.random}
        />
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2> Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}


export default App;
