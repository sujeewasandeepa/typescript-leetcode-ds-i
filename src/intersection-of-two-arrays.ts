export function intersect(nums1: number[], nums2: number[]): number[] {
    let result: number[] = []
    nums1 = nums1.sort()
    nums2 = nums2.sort()
    console.log(nums1)
    console.log(nums2)
    let nums1Len = nums1.length
    let nums2Len = nums2.length
    let i = 0, j = 0;

    while (i < nums1Len && j < nums2Len) {
        if (nums1[i] > nums2[j]) {
            if (nums1Len < nums1Len){
                j++
            } else {
                i++
            }

        } else if (nums1[i] < nums2[j]) {
            if (nums2Len < nums1Len) {
                i++
            } else {
                j++
            }

        } else {
            result.push(nums1[i])
            i++
            j++
        }
    }

    return result
};