import sudoku from "sudoku";

export const new_board_generator = () => sudoku.makepuzzle();
export const solution_generator = (b) => sudoku.solvepuzzle(b);
