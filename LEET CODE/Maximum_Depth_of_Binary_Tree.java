import javax.swing.tree.TreeNode;

class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null)
            return 0;

        int lh = maxDepth(root.left);
        int rh = maxDepth(root.right);

        return Math.max(lh, rh) + 1;
    }
}

/**
 * Maximum_Depth_of_Binary_Tree
 */
public class Maximum_Depth_of_Binary_Tree {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}