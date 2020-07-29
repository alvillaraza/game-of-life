import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Button, ButtonToolbar } from "react-bootstrap";

class Box extends React.Component {
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col);
  };

  render() {
    return (
      <div
        className={this.props.boxClass}
        id={this.props.id}
        onClick={this.selectBox}
      />
    );
  }
}

class Grid extends React.Component {
  render() {
    const width = this.props.cols * 16;
    var rowsArr = [];

    var boxClass = "";
    for (var i = 0; i < this.props.rows; i++) {
      for (var k = 0; k < this.props.cols; k++) {
        let boxId = i + "_" + k;

        boxClass = this.props.gridFull[i][k] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={k}
            selectBox={this.props.selectBox}
          />
        );
      }
    }

    return (
      <div className="grid" style={{ width: width }}>
        {rowsArr}
      </div>
    );
  }
}

class Buttons extends React.Component {
  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <Button className="btn btn-default" onClick={this.props.playButton}>
            Play
          </Button>
          <Button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </Button>
          <Button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </Button>
          <Button className="btn btn-default" onClick={this.props.seed}>
            Seed
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

class Main extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

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

  seed = () => {
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
    this.seed();
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
          seed={this.seed}
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

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
