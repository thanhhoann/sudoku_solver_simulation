import { useState } from "react";
import "./App.scss";
import Cell from "./components/Cell";
import {
  new_board_generator,
  solution_generator,
} from "./utils/board_generator";

const initial_board = new_board_generator();
const initial_solution = solution_generator(initial_board);

export default function App() {
  const [sudoku_board, setSudoku_board] = useState(parse_board(initial_board));
  const [solution, setSolution] = useState(initial_solution);

  const solveButton = () => {
    setSudoku_board(solution);
  };

  const tryButton = () => {
    let new_board = new_board_generator();
    let new_board_solution = solution_generator(new_board);

    setSudoku_board(parse_board(new_board));
    setSolution(new_board_solution);
  };

  return (
    <>
      <div className="screen">
        <div className="board">
          {sudoku_board.map((num, index) => {
            return <Cell key={index} num={num} />;
          })}
        </div>

        <div className="btns">
          <div className="btn try_btn" onClick={tryButton}>
            Try a different puzzle
          </div>

          <div className="btn solve_btn" onClick={solveButton}>
            SOLVE
          </div>
        </div>
      </div>
    </>
  );
}

const parse_board = (b) => {
  for (let i in b) if (b[i] == null) b[i] = 0;
  return b;
};
