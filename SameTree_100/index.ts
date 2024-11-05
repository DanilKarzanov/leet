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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    function BFSTraversal(root: TreeNode | null): Array<number | null> {
        const queue: Array<TreeNode | null> = []
        const res: Array<number | null> = []
        queue.push(root)

        while (queue.length > 0) {
            const enqueued = queue.shift()
            res.push(enqueued === null ? null : enqueued!.val)

            if (enqueued !== null) {
                if (enqueued!.left !== null) {
                    queue.push(enqueued!.left)
                } else queue.push(null)

                if (enqueued!.right) {
                    queue.push(enqueued!.right)
                } else queue.push(null)
            }
        }

        return res
    }

    return JSON.stringify(BFSTraversal(p)) === JSON.stringify(BFSTraversal(q))
};