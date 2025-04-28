const sudokuOne = [
    [4, 1, -1, -1, -1, -1, -1, 6, -1],
    [-1, -1, -1, 7, 9, 4, -1, 8, -1],
    [2, -1, -1, -1, 3, -1, -1, 4, -1],
    [-1, -1, -1, -1, -1, -1, 8, 7, -1],
    [5, 2, -1, 8, -1, -1, 9, -1, 3],
    [-1, -1, 6, -1, 1, -1, -1, -1, 5],
    [7, 4, 5, -1, 2, -1, -1, -1, -1],
    [-1, 8, -1, -1, -1, 1, 6, -1, -1],
    [1, 6, 9, 5, -1, -1, -1, 3, 2],
];
const soluceSudokuOne = [
    [4, 1, 7, 2, 8, 5, 3, 6, 9],
    [6, 5, 3, 7, 9, 4, 2, 8, 1],
    [2, 9, 8, 1, 3, 6, 5, 4, 7],
    [9, 3, 1, 4, 5, 2, 8, 7, 6],
    [5, 2, 4, 8, 6, 7, 9, 1, 3],
    [8, 7, 6, 3, 1, 9, 4, 2, 5],
    [7, 4, 5, 6, 2, 3, 1, 9, 8],
    [3, 8, 2, 9, 7, 1, 6, 5, 4],
    [1, 6, 9, 5, 4, 8, 7, 3, 2],
];
const isSameSudoku = (base, soluce) => {
    for (let i = 0; i < base.length; i++) {
        for (let j = 0; j < base.length; j++) {
            if (base[i][j] !== -1 && base[i][j] !== soluce[i][j]) {
                return false;
            }
        }
    }
    return true;
};
const isValid = (soluce, col, row) => {
    const value = soluce[row][col];
    for (let i = 0; i < soluce.length; i++) {
        if (i !== col && soluce[row][i] === value) {
            return false;
        }
    }
    for (let j = 0; j < soluce.length; j++) {
        if (j !== row && soluce[j][col] === value) {
            return false;
        }
    }
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++)
            if (soluce[i + startRow][j + startCol] === value) {
                return false;
            }
    }
    return true;
};
const SudokuValidation = (base, soluce) => {
    if (isSameSudoku(base, soluce)) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (soluce[i][j] !== -1 && !isValid(soluce, j, i)) {
                    return false;
                }
            }
        }
        return true;
    }
};
