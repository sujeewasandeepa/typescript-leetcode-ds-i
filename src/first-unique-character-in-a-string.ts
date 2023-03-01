export function firstUniqChar(s: string): number {
    let charMap: Map<string, number> = new Map();
    let charArray: string[] = s.split("");

    for(let i = 0; i < charArray.length; i++) {
        if(charMap.has(charArray[i])) {
            charMap.set(charArray[i], charMap.get(charArray[i]) as number + 1);
        } else {
            charMap.set(charArray[i], 1);
        }
    }

    for(let i = 0; i < charArray.length; i++) {
        if(charMap.get(charArray[i]) === 1) {
            return i;
        }
    }

    return -1;
};