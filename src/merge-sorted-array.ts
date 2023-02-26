export function MergeSortedArray (nums1: number[], m: number, nums2: number[], n: number): void {

    let i = m-1
    let j = n-1
    let k = m+n - 1

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }

    while (j >= 0) {
        nums1[k] = nums2[j]
        j--
        k--
    }

    console.log(nums1)


    // this algorithm does not when there are zeros involved
    // nums2Loop:for (let i=0; i<n; i++) {

    //     nums1Loop:for (let j=0; j<m+n; j++) {

    //         if (nums1[j] == 0) {
    //             nums1[j] = nums2[i]
    //             continue nums2Loop
    //         } else if (nums1[j] > nums2[i]) {
    //             let temp = nums1[j]
    //             nums1[j] = nums2[i]
    //             nums2[i] = temp
    //             continue nums1Loop
    //         }

    //     }

    // }

    // console.log(nums1)

};