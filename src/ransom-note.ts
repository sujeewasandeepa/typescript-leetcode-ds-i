export function canConstruct(ransomNote: string, magazine: string): boolean {

    let ransomNoteMap: Map<string, number> = new Map();
    let magazineMap: Map<string, number> = new Map();

    let ransomNoteArray: string[] = ransomNote.split("");
    let magazineArray: string[] = magazine.split("");

    for(let i = 0; i < ransomNoteArray.length; i++) {
        if(ransomNoteMap.has(ransomNoteArray[i])) {
            ransomNoteMap.set(ransomNoteArray[i], ransomNoteMap.get(ransomNoteArray[i]) as number + 1);
        } else {
            ransomNoteMap.set(ransomNoteArray[i], 1);
        }
    }

    for(let i = 0; i < magazineArray.length; i++) {
        if(magazineMap.has(magazineArray[i])) {
            magazineMap.set(magazineArray[i], magazineMap.get(magazineArray[i]) as number + 1);
        } else {
            magazineMap.set(magazineArray[i], 1);
        }
    }

    console.log(ransomNoteMap);
    console.log(magazineMap);

    for(let [key, value] of ransomNoteMap) {
        if(magazineMap.has(key)) {
            if(magazineMap.get(key) as number < value) {
                return false;
            }
        } else {
            return false;   
        }
    }
    return true;
};