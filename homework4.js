
//this function takes a number, and prints that many stars * next to
//each other on a line
const printMany = function (b) {
  let count = b;
  let stars = '*';
  while (count>1) {
    stars = stars + '*';
    count = count-1;

  };
  return stars;

//this function takes the given height of the upside-down triangle
//and uses the previous function as well as adds correct amount of spaces
//before every line after the first

}
const triangleStars = function (a) {

//below calculating the length of row and creating a space which at first
// is an empty string (we will later make it a valid space)
let rowLength = a*2-1;
let space = '';

//below is the while loop, which checks the rowlength, and based on that
//uses the first function to print triangle rows with spaces
while (rowLength>0) {
  console.log(space+printMany(rowLength));
  rowLength = rowLength-2;
  space = space + ' ';

}
};

triangleStars(27);


//a function that takes a two dimensional array and returns
//a single array with all the values from the child arrays

const multiToSingle = function ([[1,2,3],[4,5,6],[7,8,9]]) {
  const newArr = [whatever];
  let n = arr.length-1;
  let m = a.length-1;

};


// this function finds the largest or the smallest number from an
// array of ANY length

const findMinMax = function (a, b) {

  if (b === true) {

  const arr = a;

  // below I am finding the index number of the last number in the array

  let n = arr.length-1;
  let m = arr.length-1;
  let desNumber = arr[n]; // desNumber is the "desired number"
  while (n>=0) {
    // comparing the last number to all the numbers in the array below
    while (arr[n]>arr[m] && m>=0) {
      m = m-1;
      desNumber = arr[n]
    };
    //below I am switching to another number if the requirement is not met
    n = n - 1;
  }
  return 'the largest number is ' + desNumber;
} else if (b === false) {


  const arr = a;
  let n = arr.length-1;
  let m = arr.length-1;
  let desNumber = arr[n];
  while (n>=0) {
    while (arr[n]<arr[m] && m>=0) {
      m = m-1;
      desNumber = arr[n]
    };
    n = n - 1;
  }
  return 'the smallest number is ' + desNumber;
}
}

 console.log(findMinMax([1,5,3,2,7,22,2], false));
