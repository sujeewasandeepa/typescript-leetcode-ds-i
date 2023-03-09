function findTarget(root: TreeNode | null, k: number): boolean {
    const set = new Set();
    const stack: TreeNode[] = [];
    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop()!;
        if (set.has(k - root.val)) return true;
        set.add(root.val);
        root = root.right;
    }
    return false;
};