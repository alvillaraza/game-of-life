import React from 'react';

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

export default Grid