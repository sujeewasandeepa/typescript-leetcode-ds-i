function isValidBST(root: TreeNode | null): boolean {
    const stack: TreeNode[] = [];
    let prev: TreeNode | null = null;
    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop()!;
        if (prev !== null && prev.val >= root.val) return false;
        prev = root;
        root = root.right;
    }
    return true;
};