// let arr = [5, 2, 2, 4] // unique [5, 4]

// let map = new Map()

// for (let key of arr) {
//     map.set(key, (map.get(key) || 0) + 1)
// }

// let result = [];

// for (let [key, value] of map) {
//     if (value === 1) {
//         result.push(key)
//     }
// }

// console.log(result);




// let arr1 = [1, 3, 3, 5, 6]
// let arr2 = [2, 3, 3, 4, 5]

// let map1 = new Map();
// let map2 = new Map();

// let result = [];

// for (let key of arr1) {
//     map1.set(key, (map1.get(key) || 0) + 1)
// }

// for (let key of arr2) {
//     map2.set(key, (map2.get(key) || 0) + 1)
// }

// for (let [key, _] of map1) {
//     if (map2.has(key)) {
//         result.push(key)
//     }
// }
// console.log(result);



// function areAnagrams(str1, str2) {
//     if(str1.length !== str2.length) return false
//     let map1 = new Map();

//     for (let key of str1) {
//         map1.set(key, (map1.get(key) || 0) + 1);
//     }

//     for (let key of str2) {
//         if (!map1.has(key)) return false;
//         map1.set(key, map1.get(key) - 1);
//     }

//     for (let [_, val] of map1) {
//         if (val !== 0) return false;
//     }
//     return true
// }

// console.log(areAnagrams('listen', 'silten'));
// console.log(areAnagrams('hello', 'world'));


//27
// function commonCharacters(str1, str2) {
//     let map1 = new Map()
//     let map2 = new Map()
//     let result = ''

//     for (let key of str1) {
//         map1.set(key, (map1.get(key) || 0) + 1)
//     }

//     for (let key of str2) {
//         map2.set(key, (map2.get(key) || 0) + 1)
//     }

//     for (let [key, _] of map1) {
//         if (map2.has(key)) {
//             result += key
//         }
//     }
//     return result
// }

// console.log(commonCharacters('hello', 'world')); //'lo'


// 25
// function letterFrequency(str) {
//     let map = new Map()
//     for (let key of str) {
//         map.set(key, (map.get(key) || 0) + 1)
//     }
//     if (map.get(' ')) {
//         map.delete(' ')
//     }
//     return Object.fromEntries(map)
// }

// console.log(letterFrequency('hello world'));


function symetricDifference(arr1, arr2) {
    let map1 = new Map()
    let map2 = new Map()
    let result = []
    for (let key of arr1) {
        map1.set(key, (map1.get(key) || 0) + 1)
    }
    for (let key of arr2) {
        map2.set(key, (map2.get(key) || 0) + 1)
    }

    for (let [key, _] of map1) {
        if (map2.get(key)){}
    }
}

console.log(symetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]