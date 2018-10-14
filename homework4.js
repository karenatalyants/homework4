
//this function takes a number, and prints that many * next to
//each other on a line


const printMany = function (b) {
  let count = b;
  let stars = '*';
  while (count>1) {
    stars = stars + '*';
    count = count-1;

  };
  return stars;

}


const triangleStars = function (a) {
  let triangleHeight = a;
  while(triangleHeight>1) {
    triangleHeight = triangleHeight-1;
    return printMany(triangleHeight);

  }
}

console.log(triangleStars(7));
