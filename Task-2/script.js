/*  Do the below programs in arrow functions.
a.Print odd numbers in an array
b.Convert all the strings to title caps in a string array
c.Sum of all numbers in an array
d.Return all the prime numbers in an array
e.Return all the palindromes in an array
*/

// a.Print odd numbers in an array

const odd = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(`Odd numbers: ${odd([1, 2, 3, 4, 5, 6, 7, 8])}`);

//------------------------------------------------------------------------

//b.Convert all the strings to title caps in a string array

const stringArr = (arr) => {
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

//----------------------------------------------------------------------------

// c.Sum of all numbers in an array

const sum = (arr) => {
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    value = value + arr[i];
  }
  return value;
};
console.log(sum([1, 2, 3, 4, 5]));

//--------------------------------------------------------------------------------

// d.Return all the prime numbers in an array

const primefun = (arr) => {
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
console.log(primefun([-2, 1, 2, 3, 9, 5, 11, 173, 27]));

//-------------------------------------------------------------------------------------------

// e.Return all the palindromes in an array

const palin = (arr) => {
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

//------------------------------------------------------------------------------------------------
