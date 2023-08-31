/** product: calculate the product of an array of numbers. */

function product(nums) {
    if (nums.length === 0) return 1;

    return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, long='') {
    if (words.length === 0) return long.length;

    if (words[0].length > long.length) long = words[0]

    return longest(words.slice(1), long);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, out='', i=0) {
    if (i >= str.length) return out;

    if (i % 2 === 0) out = out + str[i]

    return everyOther(str, out, i + 1)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, rev='', i=str.length - 1) {
    if (i < 0) {
        if (str.toLowerCase() === rev.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }

    rev += str[i]
    return isPalindrome(str, rev, i - 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
    if (i === arr.length) return -1

    if (arr[i] === val) return i

    return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out='', i=str.length - 1) {
    if (i < 0) return out

    out += str[i]
    return revString(str, out, i - 1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out=[], keys=Object.keys(obj)) {

    for (let x of keys) {
        if (typeof obj[x] === 'object') {
            gatherStrings(obj[x], out, keys=Object.keys(obj[x]))
        } else if (typeof obj[x] === 'string') {
            out.push(obj[x])
        }
    }
    return out
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length - 1) {
    let mid = high - low

    if (low > high) return -1

    if (arr[mid] === val) return mid

    if (arr[mid] > val) return binarySearch(arr, val, low, high=mid-1)

    if (arr[mid] < val) return binarySearch(arr, val, low=mid+1, high)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

