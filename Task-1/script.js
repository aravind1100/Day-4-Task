/*
 1. Do the below programs in anonymous function & IIFE
      a.  Print odd numbers in an array
      b.  Convert all the strings to title caps in a string array
      c. Sum of all numbers in an array
      d. Return all the prime numbers in an array
      e. Return all the palindromes in an array
      f. Return median of two sorted arrays of the same size.
      g. Remove duplicates from an array
      h. Rotate an array by k times
*/

//a. Print odd numbers in an array
// Anonymous function

let odd = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(`Odd numbers: ${odd([1, 2, 3, 4, 5, 6, 7, 8])}`);

//IIFE function

(function (arr) {
  let result1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result1.push(arr[i]);
    }
  }
  console.log(`Odd numbers : ${result1}`);
})([1, 2, 3, 4, 5, 6, 7, 8]);

//----------------------------------------------------------------------------------------------------------------------//

//b. Convert all the strings to title caps in a string array
// Anonymous Function

let stringArr = function (arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i].toLowerCase().split("");
    x.splice(0, 1, x[0].toUpperCase());
    let y = x.join("");
    newarr.push(y);
  }
  return newarr;
};
console.log(stringArr(["rAj", "daVid", "marK", "miller", "gEorge"]));

//IIFE function

(function (arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i].toLowerCase().split("");
    x.splice(0, 1, x[0].toUpperCase());
    let y = x.join("");
    newarr.push(y);
  }
  console.log(newarr);
})(["rAj", "daVid", "marK", "miller", "gEorge"]);

//-------------------------------------------------------------------------------------------------------------------//

// c. Sum of all numbers in an array
//Anonymous Function

const sum = function (arr) {
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    value = value + arr[i];
  }
  return value;
};
console.log(sum([1, 2, 3, 4, 5]));

//IIFE Function

(function (arr) {
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    value = value + arr[i];
  }
  console.log(value);
})([1, 2, 3, 4, 5]);

//-----------------------------------------------------------------------------------------------------------------------//

// d. Return all the prime numbers in an array
//Anonymous Function

const primefun = function (arr) {
  let newArr = arr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2) {
      newArr.splice(i, 1, "nan");
    } else {
      for (let y = 2; y < arr[i]; y++) {
        if (arr[i] % y === 0) {
          newArr.splice(i, 1, "nan");
        }
      }
    }
  }
  for (let z = 0; z < newArr.length; z++) {
    if (newArr[z] !== "nan") {
      result.push(newArr[z]);
    }
  }
  return result;
};
console.log(primefun([-2, 1, 2, 3, 9, 5, 11, 173, 24]));

//IIFE Function

(function (arr) {
  let newArr = arr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2) {
      newArr.splice(i, 1, "nan");
    } else {
      for (let y = 2; y < arr[i]; y++) {
        if (arr[i] % y === 0) {
          newArr.splice(i, 1, "nan");
        }
      }
    }
  }
  for (let z = 0; z < newArr.length; z++) {
    if (newArr[z] !== "nan") {
      result.push(newArr[z]);
    }
  }
  console.log(result);
})([-2, 1, 2, 3, 9, 5, 11, 173, 24]);

//----------------------------------------------------------------------------------------------------------

// Return all the palindromes in an array
//Anonymous Function

const palin = function (arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].split("").reverse().join(""));
    if (arr[i] === newarr[i]) {
      console.log(`"${arr[i]}" is a palindrome`);
    } else {
      console.log(`"${arr[i]}" is not a palindrome`);
    }
  }
};
palin(["dad", "crow", "lol", "cop"]);

//IIFE Function

(function (arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].split("").reverse().join(""));
    if (arr[i] === newarr[i]) {
      console.log(`"${arr[i]}" is a palindrome`);
    } else {
      console.log(`"${arr[i]}" is not a palindrome`);
    }
  }
})(["dad", "crow", "lol", "cop"]);

//----------------------------------------------------------------------------------------------------------------------

//f. Return median of two sorted arrays of the same size.
//Anonymous Function

const medianArr = function (arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  arr3.sort((a, b) => a - b);
  let val = arr3.length / 2;
  let result = (arr3[val] + arr3[val - 1]) / 2;
  console.log(`The median is ${result}`);
};
medianArr([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]); //16

//IIFE Function

(function (arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  arr3.sort((a, b) => a - b);
  let val = arr3.length / 2;
  let result = (arr3[val] + arr3[val - 1]) / 2;
  console.log(`The median is ${result}`);
})([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]);

//--------------------------------------------------------------------

// g. Remove duplicates from an array
//Anonymous Function

const duplicates = function (arr) {
  let newArr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr1.includes(arr[i])) {
      continue;
    } else {
      newArr1.push(arr[i]);
    }
  }
  return newArr1;
};
console.log(duplicates([1, 16, 17, 19, 17, 1, 20, 22, 1]));

//IIFE Function

(function (arr) {
  let newArr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr1.includes(arr[i])) {
      continue;
    } else {
      newArr1.push(arr[i]);
    }
  }
  console.log(newArr1);
})(duplicates([1, 16, 17, 19, 17, 1, 20, 22, 1]));

//-----------------------------------------------------------------------------

// h. Rotate an array by k times
// Anonymous Function

const rotate = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.shift());
    console.log(arr);
  }
};
rotate([1, 2, 3, 4, 5]);

//IIFE Function

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.shift());
    console.log(arr);
  }
})([1, 2, 3, 4, 5]);

//-------------------------------------------------------------------------------
