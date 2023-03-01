export function isAnagram(s: string, t: string): boolean {

    let sMap: Map<string, number> = new Map();
    let tMap: Map<string, number> = new Map();

    let sArray: string[] = s.split("");
    let tArray: string[] = t.split("");

    for(let i = 0; i < sArray.length; i++) {
        if(sMap.has(sArray[i])) {
            sMap.set(sArray[i], sMap.get(sArray[i]) as number + 1);
        } else {
            sMap.set(sArray[i], 1);
        }
    }

    for(let i = 0; i < tArray.length; i++) {
        if(tMap.has(tArray[i])) {
            tMap.set(tArray[i], tMap.get(tArray[i]) as number + 1);
        } else {
            tMap.set(tArray[i], 1);
        }
    }

    if(sMap.size !== tMap.size) {
        return false;
    } else {
        for(let [key, value] of sMap) {
            if(tMap.has(key)) {
                if(tMap.get(key) as number !== value) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true;
};