export function searchMatrix(matrix: number[][], target: number): boolean {

    let row: number = 0;
    let col: number = matrix[0].length - 1;
    console.log(col)
    
    while(row < matrix.length && col >= 0) {
        if(matrix[row][col] === target) {
            return true;
        } else if(matrix[row][col] > target) {
            col -= 1;
        } else {
            row += 1;
        }
    }        
    return false;
};