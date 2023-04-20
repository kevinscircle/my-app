// // Setup
//const myArray = [];

// // Only change code below this line


// let x = 5

// while (x <= 5)
// {
//   if (x < 0)
//   {
//     break;
//   }
//   myArray.push(x);
//   x--;
// }


////////////////////
// const ourArray = [];

// for (let i = 10; i > 0; i -= 2) {
//   ourArray.push(i);
// }


// console.log(ourArray);



// // Setup
// const myArray = [];

// // Only change code below this line


// for (let i = 9; i > 0; i -= 2 )
// {
//   myArray.push(i);
// }

// console.log(myArray);


//////////////////
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  
  
  for (let i = 0; i < multiplyAll.length; i++)
  {
    for (let j = 0; j < multiplyAll[i].length; j++)
    {
      product = product * multiplyAll[i][j];
    }
  }
  
  
  
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



//////////////////////////////////////////

  // function countdown(n){

  //   if (n < 1)
  //   {
  //     return [];
  //   }
  //   else
  //   {
  //     let countArray = countdown(n - 1);
  //     countArray.push(n);
  //     return countArray;
  //   }

  // }


  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.splice(0, 0, n);
      return arr;
    }
  }

  countdown(5);
  console.log(countdown(5));




  function rangeOfNumbers(startNum, endNum) {

    if (startNum > endNum)
    {
       return [];
    }
    else 
    {
      let range = rangeOfNumbers(startNum, endNum - 1)
      range.push(endNum)
      return range;
    }
  
   
  };

  rangeOfNumbers(1, 5);
  console.log(rangeOfNumbers(1,5));


  var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);





function sum (a, b)
{
    return a + b; 
}
