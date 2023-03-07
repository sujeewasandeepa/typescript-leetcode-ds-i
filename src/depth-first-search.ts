export function dfs(graph: Map<string, string[]>, start: string, end: string): boolean {
    let visited: Set<string> = new Set();
    let stack: string[] = [start];
    while(stack.length > 0) {
        let node: string = stack.pop() as string;
        if(node === end) {
            return true;
        }
        if(!visited.has(node)) {
            visited.add(node);
            stack = stack.concat(graph.get(node) as string[]);
        }
    }
    return false;
}

// depth first search (DFS) is an algorithm for traversing or searching tree or graph data structures. One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.
// Path: src/depth-first-search.ts
// Compare this snippet from src/ransom-note.ts:
// export function canConstruct(ransomNote: string, magazine: string): boolean {
// 
//     let ransomNoteMap: Map<string, number> = new Map();
//     let magazineMap: Map<string, number> = new Map();
// 
//     let ransomNoteArray: string[] = ransomNote.split("");
//     let magazineArray: string[] = magazine.split("");
// 
//     for(let i = 0; i < ransomNoteArray.length; i++) {
//         if(ransomNoteMap.has(ransomNoteArray[i])) {
//             ransomNoteMap.set(ransomNoteArray[i], ransomNoteMap.get(ransomNoteArray[i]) as number + 1);
//         } else {
//             ransomNoteMap.set(ransomNoteArray[i], 1);
//         }
//     }
// 
//     for(let i = 0; i < magazineArray.length; i++) {
//         if(magazineMap.has(magazineArray[i])) {
//             magazineMap.set(magazineArray[i], magazineMap.get(magazineArray[i]) as number + 1);
//         } else {
//             magazineMap.set(magazineArray[i], 1);
//         }
//     }
// 
//     console.log(ransomNoteMap);
//     console.log(magazineMap);
// 
//     for(let [key, value] of ransomNoteMap) {
//         if(magazineMap.has(key)) {
//             if(magazineMap.get(key) as number < value) {
//                 return false;
//             }
//         } else {
//             return false;   
//         }
//     }
//     return true;
// };
export function dfsRecursive(graph: Map<string, string[]>, start: string, end: string): boolean {
    let visited: Set<string> = new Set();
    return dfsRecursiveHelper(graph, start, end, visited);
}

function dfsRecursiveHelper(graph: Map<string, string[]>, start: string, end: string, visited: Set<string>): boolean {
    if(visited.has(start)) {
        return false;
    }
    visited.add(start);
    if(start === end) {
        return true;
    }
    let neighbors: string[] = graph.get(start) as string[];
    for(let i = 0;i < neighbors.length; i++) {
        if(dfsRecursiveHelper(graph, neighbors[i], end, visited)) {
            return true;
        }
    }
    return false;
}