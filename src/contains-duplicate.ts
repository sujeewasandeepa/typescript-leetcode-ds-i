export function containsDuplicate(nums: number[]): boolean {

    const set = new Set(nums);
    return set.size !== nums.length;
    
    // let length: number = nums.length
    // let previousNums: number[] = [length]

    // if (length < 2) {
    //     return false
    // }

    // outerLoop: for (let i:number = 0; i<length; i++) {
    //     for (let j:number = 0; j<length+1; j++) {
    //         if (nums[i] === previousNums[j]) {
    //             return true;
    //         } else {
    //             previousNums[i]= nums[i]
    //             console.log(nums[i], previousNums[j])
    //             continue outerLoop
    //         }
    //     }
    // }

    // return false

};