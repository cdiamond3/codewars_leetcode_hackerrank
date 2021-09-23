function isPalindrome(x) {
    if (x.split("").join("").toLowerCase() === x.split("").reverse().join("").toLowerCase())
        return true
    else {
        return false
    }
}