// challenge No: 01 Contains Duplicate [217]
import { containsDuplicate } from "./contains-duplicate"
// Challenge No: 03 Two Sum [01]
import { twoSum } from "./two-sum"
// Challenge No: 04 Merge Sorted Array [88]
import { MergeSortedArray } from "./merge-sorted-array"
// Challenge No: 05 Intersection of Two Arrays II
import { intersect } from "./intersection-of-two-arrays"
// Challenge No: 06 Best Time to Buy and Sell Stock
import { maxProfit } from "./best-time-to-buy-and-sell-stocks"
// Challenge No. 07 Reshape the Matrix
import { matrixReshape } from "./reshape-the-matrix"
// Challenge No. 08 Pascal's Triangle
import { generatePascalTriangle } from "./pascals-triangle"
// Challenge No.09 Valid Sudoku [36]
import { isValidSudoku } from "./valid-sudoku"
// Challenge No.10 Search 2D matrix [74]
import { searchMatrix } from "./search-a-two-d-matrix"
// Challenge No.11 First Unique Character in a String [387]
import { firstUniqChar } from "./first-unique-character-in-a-string"
// Challenge No.12 Ransom Note [383]
import { canConstruct } from "./ransom-note"
// Challenge No.13 Valid Anagram [242]
import { isAnagram } from "./valid-anagram"

console.log("---- Contains Duplicate [217] ----")

const Q1testCaseOne: number[] = [1,2,3,1]
const Q1testCaseTwo: number[] = [1,2,3,4]
const Q1testCaseThree: number[] = [1,1,1,3,3,4,3,2,4,2]
const Q1testCaseFour: number[] = [5, 4, 5, 2]
const Q1testCaseFive: number[] = [5, 6, 2, 2]

console.log(containsDuplicate(Q1testCaseFive))

console.log("---- Two Sum [01] ----")

const Q2testCaseOne: [number[], number] = [[2,7,11,15], 9]
const Q2testCaseTwo: [number[], number] = [[3, 2, 4], 6]
const Q2testCaseThree: [number[], number] = [[3, 3], 6]

console.log(twoSum(Q2testCaseThree[0], Q2testCaseThree[1]))

console.log("---- Merge Sorted Array [88] ----")

const Q3testCaseOne: [number[], number, number[], number] = [[1,2,3,0,0,0], 3, [2, 5, 6], 3]
const Q3testCaseTwo: [number[], number, number[], number] = [[1], 1, [], 0]
const Q3testCaseThree: [number[], number, number[], number] = [[0], 0, [1], 1]
const Q3testCaseFour: [number[], number, number[], number] = [[-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3]

MergeSortedArray(Q3testCaseThree[0], Q3testCaseThree[1], Q3testCaseThree[2], Q3testCaseThree[3])

console.log("---- Intersection of Two Arrays II ----")

const Q4testCaseOne: [number[], number[]] = [[1,2,2,1], [2,2]]
const Q4testCaseTwo: [number[], number[]] = [[4,9,5], [9,4,9,8,4]]

console.log(intersect(Q4testCaseOne[0], Q4testCaseOne[1]))

console.log("---- Best Time to Buy and Sell Stock ----")

const Q5testCaseOne: number[] = [7,1,5,3,6,4]
const Q5testCaseTwo: number[] = [7,6,4,3,1]

console.log(maxProfit(Q5testCaseTwo))

console.log("---- Reshape the Matrix ----")

const Q6testCaseOne: [number[][], number, number] = [[[1,2], [3,4]], 1, 4]
const Q6testCaseTwo: [number[][], number, number] = [[[1,2], [3,4]], 2, 4]

console.log(matrixReshape(Q6testCaseOne[0], Q6testCaseOne[1], Q6testCaseOne[2]))

console.log("---- Pascal's Triangle ----")

const Q7testCaseOne: number = 5
const Q7testCaseTwo: number = 1
const Q7testCaseThree: number = 0
const Q7testCaseFour: number = 2

console.log(generatePascalTriangle(Q7testCaseTwo))

console.log("---- Valid Sudoku ----")

const Q8testCaseOne: string[][] = [
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const Q8testCaseTwo: string[][] = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(Q8testCaseTwo))

console.log("---- Search 2D matrix ----")

const Q9testCaseOne: [number[][], number] = [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3]
const Q9testCaseTwo: [number[][], number] = [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13]

console.log(searchMatrix(Q9testCaseOne[0], Q9testCaseOne[1]))

console.log("---- First Unique Character in a String ----")

const Q10testCaseOne: string = "leetcode"
const Q10testCaseTwo: string = "loveleetcode"
const Q10testCaseThree: string = "aabb"

console.log(firstUniqChar(Q10testCaseOne))

console.log("---- Ransom Note ----")

const Q11testCaseOne: [string, string] = ["a", "b"]
const Q11testCaseTwo: [string, string] = ["aa", "ab"]
const Q11testCaseThree: [string, string] = ["aa", "aab"]

console.log(canConstruct(Q11testCaseOne[0], Q11testCaseOne[1]))

console.log("---- Valid Anagram ----")

const Q12testCaseOne: [string, string] = ["anagram", "nagaram"]
const Q12testCaseTwo: [string, string] = ["rat", "car"]

console.log(isAnagram(Q12testCaseTwo[0], Q12testCaseTwo[1]))
