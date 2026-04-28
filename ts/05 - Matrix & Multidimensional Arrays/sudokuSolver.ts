/*
  37. Sudoku Solver
  Write a program to solve a Sudoku puzzle by filling the empty cells.

  A sudoku solution must satisfy all of the following rules:

  Each of the digits 1-9 must occur exactly once in each row.
  Each of the digits 1-9 must occur exactly once in each column.
  Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
  The '.' character indicates empty cells.

  

  Example 1:


  Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
  Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
  Explanation: The input board is shown above and the only valid solution is shown below:
*/

function isValid(board: string[][], row: number, column: number, numChar: string): boolean {
    for (let c = 0; c < 9; c++) {
        if (board[row]![c] == numChar) {
            return false;
        }
    }

    for (let r = 0; r < 9; r++) {
        if (board[r]![column] == numChar) {
            return false;
        }
    }

    const boxRowStart = Math.trunc(row / 3) * 3;
    const boxColumnStart = Math.trunc(column / 3) * 3;
    for (let r = boxRowStart; r < (boxRowStart + 3); r++) {
        for (let c = boxColumnStart; c < (boxColumnStart + 3); c++) {
            if (board[r]![c] == numChar) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku(board: string[][]): boolean {
    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            if (board[row]![column] === ".") {
                for (let digit = 1; digit < 10; digit++) {
                    const numChar = digit.toString();
                    if (isValid(board, row, column, numChar)) {
                        board[row]![column] = numChar;
                        if (solveSudoku(board)) {
                            return true;
                        } else {
                            board[row]![column] = ".";
                        }
                    }
                }
                return false;
            }
        }
    }

    return true;
};

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
solveSudoku(board);
console.log(board);