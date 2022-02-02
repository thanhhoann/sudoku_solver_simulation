import { useState } from "react";
import "./App.scss";
import Cell from "./components/Cell";
import {
  new_board_generator,
  solution_generator,
} from "./utils/board_generator";

const initial_board = new_board_generator();
const initial_solution = solution_generator(initial_board);

console.log(initial_board);
console.log(initial_solution);

export default function App() {
  const [sudoku_board, setSudoku_board] = useState(parse_board(initial_board));
  const [solution, setSolution] = useState(initial_solution);
  const [isReset, setReset] = useState(false);

  const solveButton = () => {
    setSudoku_board(solution);
  };

  const tryButton = () => {
    let new_board = new_board_generator();
    let new_board_solution = solution_generator(new_board);

    setReset(true);
    setSudoku_board(parse_board(new_board));
    setSolution(new_board_solution);
  };

  return (
    <>
      <div className="screen">
        <div className="board">
          {sudoku_board.map((num, index) => {
            return (
              <Cell key={index} num={num} index={index} isReset={isReset} />
            );
          })}
        </div>

        <div className="right_side">
          <div className="title">[ sudoku_solver ]</div>

          <div className="btn solve_btn" onClick={solveButton}>
            Solve using&nbsp;
            <span style={{ color: "orange" }}>Graph Coloring Algorithm</span>
          </div>

          <div className="btn try_btn" onClick={tryButton}>
            Try a different puzzle
          </div>
        </div>
      </div>
    </>
  );
}

const parse_board = (b) => {
  for (let i in b) {
    if (b[i] == null) b[i] = 10;
  }
  return b;
};

const backtracking = (b) => {};
