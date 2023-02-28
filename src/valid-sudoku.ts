export function isValidSudoku(board: string[][]): boolean {

    for (let i=0; i<9; i++) {

        let row: number[] = []

        for (let j=0; j<9; j++) {
            if (board[i][j] === ".") continue
            if (board[i][j] as unknown as number > 9 || board[i][j]as unknown as number < 1) return false
            if (row.includes(board[i][j] as unknown as number)) return false
            row.push(board[i][j] as unknown as number)          
        }
    }

    for (let i=0; i<9; i++) {
        let col: number[] = []

        for (let j=0; j<9; j++) {
            if (board[j][i] === ".") continue
            if (col.includes(board[j][i] as unknown as number)) return false
            col.push(board[j][i] as unknown as number)
        }

    }

    for (let i=0; i<9; i+=3) {
        for (let j=0; j<9; j+=3) {
            let box: number[] = []
            rowsLoop:for (let k=i; k<i+3; k++) {
                colsLoop:for (let l=j; l<j+3; l++) {
                    if (board[k][l] === ".") continue colsLoop
                    if (box.includes(board[k][l] as unknown as number)) return false
                    box.push(board[k][l] as unknown as number)
                }
            }
        }
    }

    return true
};