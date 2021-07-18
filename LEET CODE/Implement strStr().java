class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty())
            return 0;
        else
            return haystack.indexOf(needle);
    }
}