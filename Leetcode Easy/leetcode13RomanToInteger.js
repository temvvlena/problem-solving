// https://leetcode.com/problems/roman-to-integer/
// Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */

// My Solution
var romanToInt = function (s) {
    let myHash = new Map();
    myHash.set("I", 1)
    myHash.set("V", 5)
    myHash.set("X", 10)
    myHash.set("L", 50)
    myHash.set("C", 100)
    myHash.set("D", 500)
    myHash.set("M", 1000)
    let counter = 0;
    let index = 0;
    while (index < s.length) {
        if (index + 1 < s.length && myHash.get(s[index + 1]) > myHash.get(s[index])) {
            counter += myHash.get(s[index + 1]) - myHash.get(s[index]);
            index += 2;
        }
        else {
            counter += myHash.get(s[index]);
            index += 1;
        }
    }
    return counter;
};


// Leetcode discussion solution
const symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = (s) => {
    let value = 0;
    for (let i = 0; i < s.length; i++) {
        symbols[s[i]] < symbols[s[i + 1]] ? value -= symbols[s[i]] : value += symbols[s[i]];
    }
    return value;
};
