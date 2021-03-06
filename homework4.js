  //2. Use While loop to create a function called 'triangleStars' that prints
  //an upside-down triangle to the console of the given height.


  //this function takes a number, and prints that many stars * next to
  //each other on a line
  const printMany = function(b) {
    let count = b;
    let stars = '*';
    while (count > 1) {
      stars = stars + '*';
      count = count - 1;

    };
    return stars;

    //this function takes the given height of the upside-down triangle
    //and uses the previous function as well as adds correct amount of spaces
    //before every line after the first

  }
  const triangleStars = function(a) {

    //below calculating the length of row and creating a space which at first
    // is an empty string (we will later make it a valid space)
    let rowLength = a * 2 - 1;
    let space = '';

    //below is the while loop, which checks the rowlength, and based on that
    //uses the first function to print triangle rows with spaces
    while (rowLength > 0) {
      console.log(space + printMany(rowLength));
      rowLength = rowLength - 2;
      space = space + ' ';

    }
  };

  triangleStars(27);

  //3. Write a function that takes a two dimensional array and
  // returns a single array with all the values in the child arrays.

  //a function that takes a two dimensional array of ANY length, and returns
  //a single array with all the values from the child arrays next to
  // each other

  const multiToSingle = function(array) {
    const newArr = [];
    let a = 0;
    let c = 0;
    while (a < array.length) {
      let b = 0;
      while (b < array[a].length) {
        newArr[c] = array[a][b];
        b = b + 1;
        c = c + 1;
      }
      a = a + 1;
    }
    return newArr;
  }

  console.log(multiToSingle([
    [1, 2, 3],
    [4, 5, 'spaghetti', 6],
    [7, 8, 4, 2, 4, 1, -23, 9],
    [10, 11, 12],
    ['boxk', 'gyazar', 'kartol']
  ]));


  //4. Create a function 'findMinMax' that returns the largest number
  //from the given array if the second argument is true.
  // It returns the smallest number in the given array if the
  // second argument is false.

  // this function finds the largest or the smallest number from an
  // array of ANY length

  const findMinMax = function(a, b) {

    if (b === true) {

      const arr = a;

      // below I am finding the index number of the last number in the array

      let n = arr.length - 1;
      let m = arr.length - 1;
      let desNumber = arr[n]; // desNumber is the "desired number"
      while (n >= 0) {
        // comparing the last number to all the numbers in the array below
        while (arr[n] > arr[m] && m >= 0) {
          m = m - 1;
          desNumber = arr[n]
        };
        //below I am switching to another number if the requirement is not met
        n = n - 1;
      }
      return 'the largest number is ' + desNumber;
    } else if (b === false) {


      const arr = a;
      let n = arr.length - 1;
      let m = arr.length - 1;
      let desNumber = arr[n];
      while (n >= 0) {
        while (arr[n] < arr[m] && m >= 0) {
          m = m - 1;
          desNumber = arr[n]
        };
        n = n - 1;
      }
      return 'the smallest number is ' + desNumber;
    }
  }

  console.log(findMinMax([1, 5, 3, 2, 7, 22, 2], false));

  // 5. Create a function 'forEach' that takes an array and a function and then
  // calls the given function once with each value in the given array.


  const factorial = function(val) {
    let a = val;
    let fact = 1;
    while (a > 0) {
      fact = fact * a;
      a = a - 1;
    }
    return console.log(fact);
  };

  const forEach = function(array, jj) {
    let b = 0;
    while (b < array.length) {
      jj(array[b]);
      b = b + 1;
    }
  };

  forEach([2, 3, 4], factorial);



  // 6. Create a function 'sum' that takes an array of
  // numbers and returns their sum.

  const sum = function(array) {
    let b = 0;
    let sumsum = 0;
    while (b < array.length) {
      sumsum = sumsum + array[b];
      b = b + 1;
    }
    return sumsum;
  }

  // console.log(sum([3,5,77, 1000, 1000]));

  // 7. Write a function 'reverse' that reverses the given string.

  const reverse = function(string) {
    let b = string.length - 1;
    let newStr = '';
    while (b >= 0) {
      newStr = newStr + string[b];
      b = b - 1;
    }
    return newStr;
  }

  console.log(reverse('vera sroh vaxe hcni se ara uq iav'));



  //8. Create a function called checkerboard using While loop which, given
  // a size argument, will draw an n by n checkerboard on the screen.

  const printRow = function(b) {
    let count = b;
    let stars = '*';
    while (count > 1) {
      stars = stars + '*';
      count = count - 1;

    };
    return stars;

  }
  const checkerBoard = function(a) {
    let space = ' ';
    let rowLength = a;
    let rowNumber = 1;
    while (rowNumber <= rowLength) {
      if (rowNumber === 1) {
        console.log(printRow(rowLength));
        rowNumber = rowNumber + 1;
      }
      if (rowNumber % 2 !== 0) {
        console.log(printRow(rowLength));
        rowNumber = rowNumber + 1;
      } else if (rowNumber % 2 === 0) {
        console.log(space + printRow(rowLength));
        rowNumber = rowNumber + 1;
      }
    }
  }
  checkerBoard(10);