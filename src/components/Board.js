import React, { useState, useEffect } from "react";

const Board = () => {
  const colors = [
    "blue",
    "red",
    "yellow",
    "green",
    "brown",
    "gray",
    "lightgreen",
    "cadetblue",
    "blue",
    "red",
    "yellow",
    "green",
    "brown",
    "gray",
    "lightgreen",
    "cadetblue",
  ];

  const [colorss, setColorss] = useState(colors);

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    init();
  });

  // const Cell = () => {
  //   return <div onClick={() => handleClick()}></div>;
  // };

  // const handleClick = () => {
  //   alert("s");
  // };

  function shuffle() {
    let array = colors;
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  // const handleClick = (event) => {
  //   // shuffle();
  //   setColorss(shuffle);
  //   console.log(colors);
  // };
  // shuffle(colors);
  shuffle();
  let itemList = [];

  const init = function () {
    colors.map((color, index) => {
      return itemList.push(<div className={colors[index]} key={index}></div>);
    });
  };

  init();

  return (
    <>
      <button onClick={() => setColorss(shuffle)}>new game</button>
      <div className="container">{itemList}</div>
    </>
  );
};
{
  /* // function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
} */
}

export default Board;
