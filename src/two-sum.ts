export function twoSum(nums: number[], target: number): number[] {
    let output: number[] = []

    for (let ele = 0; ele < nums.length; ele ++) {
        for (let inn = 0; inn < nums.length; inn ++) {
            if (nums[ele] + nums[inn] === target && inn != ele) {
                output.push(ele)
                output.push(inn)
                return output
            }
        }
    }

    return output
};