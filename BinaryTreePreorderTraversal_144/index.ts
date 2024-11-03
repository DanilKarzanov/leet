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
 
function preorderTraversal(root: TreeNode | null): number[] {
    // root -> left -> right
    // iterative approach (using stack)
    if (root === null) {
        return []
    }

    const stack: Array<TreeNode | null> = []
    const res: number[] = []
    let curr: TreeNode | null = root

    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            res.push(curr.val)
            if (curr.right) {
                stack.push(curr.right)
            }
            curr = curr.left
        }

        if (stack.length > 0) {
            // @ts-ignore
            curr = stack.pop()
        }
    }

    return res
};