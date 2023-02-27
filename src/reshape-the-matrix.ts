export function matrixReshape(mat: number[][], r: number, c: number): number[][] {

    const length = mat.length * mat[0].length
    let arr: any [] = []

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            arr.push(mat[i][j])
        }
    }

    if (length !== r * c) { 
        return mat 
    }

    let newMat: number[][] = []

    for (let i = 0; i < r; i++) {
        let row: number[] = []
        for (let j = 0; j < c; j++) {
            row.push(arr.shift())
        }
        newMat.push(row)
    }

    return newMat
};