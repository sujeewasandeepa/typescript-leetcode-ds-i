function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    let P = p!;
    let Q = q!;
    if (root.val > P.val && root.val > Q.val) return lowestCommonAncestor(root.left, p, q);
    if (root.val < P.val && root.val < Q.val) return lowestCommonAncestor(root.right, p, q);
    return root;
};