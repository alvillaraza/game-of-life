import React from "react";


class Rules extends React.Component {
  render() {
    return (
      <div className="rules">
        <p>The Game of Life, also known simply as Life, is a cellular automaton
        devised by the British mathematician John Horton Conway in 1970. It
        is a zero-player game, meaning that its evolution is determined by its
        initial state, requiring no further input. One interacts with the Game
        of Life by creating an initial configuration and observing how it
        evolves. It is Turing complete and can simulate a universal constructor
        or any other Turing machine. </p>
        
        <p>These rules, which compare the behavior of
        the automaton to real life, can be condensed into the following:</p>
        <ul>
          <li>Any live cell with two or three live neighbours survives.</li>
          <li>Any dead cell with three live neighbours becomes a live cell.</li>
          <li>
            All other live cells die in the next generation. Similarly, all
            other dead cells stay dead.
          </li>
        </ul>
      </div>
    );
  }
}

export default Rules;
