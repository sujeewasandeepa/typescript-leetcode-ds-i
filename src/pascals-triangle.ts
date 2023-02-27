export function generatePascalTriangle(numRows: number): number[][] {

    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];

    let triangle: number[][] = [[1], [1, 1]];

    for (let i = 2; i < numRows; i++) {

        let row: number[] = [1];

        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }

        row.push(1);
        triangle.push(row);
    }

    return triangle;

};