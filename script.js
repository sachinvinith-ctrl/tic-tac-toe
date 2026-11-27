const gameBoard = {
  array: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
};

function implementMarker(expression) {
  switch (expression) {
    case "element[0][0]":
      gameBoard.array[0].splice(0, 1, "o");
      break;
    case "element[0][1]":
      gameBoard.array[0].splice(1, 1, "o");
      break;
    case "element[0][2]":
      gameBoard.array[0].splice(2, 1, "o");
      break;
    case "element[1][0]":
      gameBoard.array[1].splice(0, 1, "o");
      break;
    case "element[1][1]":
      gameBoard.array[1].splice(1, 1, "o");
      break;
    case "element[1][2]":
      gameBoard.array[1].splice(2, 1, "o");
      break;
    case "element[2][0]":
      gameBoard.array[2].splice(0, 1, "o");
      break;
    case "element[2][1]":
      gameBoard.array[2].splice(1, 1, "o");
      break;
    case "element[2][2]":
      gameBoard.array[2].splice(2, 1, "o");
      break;
      gameBoard.array[0].splice(0, 1, "x");
      gameBoard.array[0].splice(1, 1, "x");
      gameBoard.array[0].splice(2, 1, "x");
      gameBoard.array[1].splice(0, 1, "x");
      gameBoard.array[1].splice(1, 1, "x");
      gameBoard.array[1].splice(2, 1, "x");
      gameBoard.array[2].splice(0, 1, "x");
      gameBoard.array[2].splice(1, 1, "x");
      gameBoard.array[2].splice(2, 1, "x");
  }

  const verticalFirstX = gameBoard.array.every((element) => {
    return element[0] === "x";
  });
  const verticalSecondX = gameBoard.array.every((element) => {
    return element[1] === "x";
  });
  const verticalThirdX = gameBoard.array.every((element) => {
    return element[2] === "x";
  });

  const verticalFirstO = gameBoard.array.every((element) => {
    return element[0] === "o";
  });
  const verticalSecondO = gameBoard.array.every((element) => {
    return element[1] === "o";
  });
  const verticalThirdO = gameBoard.array.every((element) => {
    return element[2] === "o";
  });

  const firstRowX = gameBoard.array[0].every((element) => element === "x");
  const secondRowX = gameBoard.array[1].every((element) => element === "x");
  const thirdRowX = gameBoard.array[2].every((element) => element === "x");

  const firstRowO = gameBoard.array[0].every((element) => element === "o");
  const secondRowO = gameBoard.array[1].every((element) => element === "o");
  const thirdRowO = gameBoard.array[2].every((element) => element === "o");

  if (firstRowO || secondRowO || thirdRowO) {
    console.log("o wins");
  } else if (
    gameBoard.array[0][0] === "o" &&
    gameBoard.array[1][1] === "o" &&
    gameBoard.array[2][2] === "o"
  ) {
    console.log("o wins");
  } else if (
    gameBoard.array[0][2] === "o" &&
    gameBoard.array[1][1] === "o" &&
    gameBoard.array[2][0] === "o"
  ) {
    console.log("o wins");
  } else if (verticalFirstO || verticalSecondO || verticalThirdO) {
    console.log("o wins");
  } else if (firstRowX || secondRowX || thirdRowX) {
    console.log("x wins");
  } else if (
    gameBoard.array[0][0] === "x" &&
    gameBoard.array[1][1] === "x" &&
    gameBoard.array[2][2] === "x"
  ) {
    console.log("x wins");
  } else if (
    gameBoard.array[0][2] === "x" &&
    gameBoard.array[1][1] === "x" &&
    gameBoard.array[2][0] === "x"
  ) {
    console.log("x wins");
  } else if (verticalFirstX || verticalSecondX || verticalThirdX) {
    console.log("x wins");
  }
}
