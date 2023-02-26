export function intersect(nums1: number[], nums2: number[]): number[] {
    let result: number[] = []

    let nums1Map: Map<number, any> = new Map()
    let nums2Map: Map<number, any> = new Map()

    for (let i=0; i<nums1.length; i++) {
        if (nums1Map.has(nums1[i])) {
            nums1Map.set(nums1[i], nums1Map.get(nums1[i]) + 1)
        } else {
            nums1Map.set(nums1[i], 1)
        }
    }

    for (let i=0; i<nums2.length; i++) {
        if (nums2Map.has(nums2[i])) {
            nums2Map.set(nums2[i], nums2Map.get(nums2[i]) + 1)
        } else {
            nums2Map.set(nums2[i], 1)
        }
    }

    for (let [key, value] of nums1Map) {
        if (nums2Map.has(key)) {
            let min = Math.min(value, nums2Map.get(key))
            for (let i=0; i<min; i++) {
                result.push(key)
            }
        }
    }

    return result
};