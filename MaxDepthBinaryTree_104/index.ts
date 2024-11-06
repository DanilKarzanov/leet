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

function maxDepth(root: TreeNode | null): number {
    let maxD = 0

    function checkDepth(node: TreeNode | null, currPathD: number) {
        if (!node) {
            return 
        }

        maxD = Math.max(maxD, currPathD + 1)
        if (node.left) {
            checkDepth(node.left, currPathD + 1)
        }

        if (node.right) {
            checkDepth(node.right, currPathD + 1)
        }
    }

    checkDepth(root, 0)
    return maxD
};