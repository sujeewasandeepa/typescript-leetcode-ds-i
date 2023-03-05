class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


export function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []
    const result: number[] = []
    dfs(root, result)
    return result
};

function dfs(node: TreeNode | null, result: number[]) {
    if (!node) return
    dfs(node.left, result)
    result.push(node.val)
    dfs(node.right, result)
}