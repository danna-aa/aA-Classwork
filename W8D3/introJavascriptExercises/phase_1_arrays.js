Array.prototype.myUniq = function() {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    if (!newArray.includes(this[i])) {
      newArray.push(this[i])
    }
  }
  return newArray;
}


console.log([1, 2, 2, 3, 3, 3].myUniq());


Array.prototype.twoSum = function() {
  let finalArray = [];

  for (let i = 0; i<this.length; i ++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        finalArray.push([i , j]);
      }
    }
  }
  return finalArray;
}

console.log([1,2,3, -1, -2, 0].twoSum());


// Array.prototype.transpose = function() {
//   let transposed = [];
//   let newArray = this.slice

//   let rows = this.length; 
//   let cols = this[0].length;

//   let subArr = []
//   for (let x = 0; x < rows; x++) {
//     subArr.push('x');
//   }

//   for (let y = 0; y < cols; y++) {
//     transposed.push(subArr.slice());
//   }
//   //iterate through 'this'
//   //switch "i"s with "j"s
//   (0...row).each do |i|
//     (0...col).each do |j|
//       array[i][j] = transposed[j][i]
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++ ) {
//       transposed[j][i] = this[i][j];
//     }
//   } 
//   return transposed;

// }
// console.log([[1, 2, 3], [4, 5, 6]].transpose());


Array.prototype.transpose = function() {
  let transposed = []
  // let original = this

  let row = this.length;
  let colm = this[0].length;
 
  for (let j = 0; j < colm; j++) {
    let inner = [];
    for (let k = 0; k < row; k++) {
      inner.push(this[k][j]);
    }
    transposed.push(inner);
  }
  return transposed;
}
console.log([[1,2,3],[4,5,6]].transpose());