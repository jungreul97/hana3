'use strict';
const assert = require('assert');

function keyPair(arr, sum) {
    let numsMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = sum - arr[i];
        if (numsMap.has(complement)) {
            return [numsMap.get(complement), i];
        }
        numsMap.set(arr[i], i);
    }
    return [];
}

keyPair([1, 3, 4, 5], 7);             // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16);    // [3, 4]
keyPair([1, 2, 4, 3, 6], 10);         // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9);       // [3, 4]
//cf. O(n^2) ⇒ O(N) || O(logN)
assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);