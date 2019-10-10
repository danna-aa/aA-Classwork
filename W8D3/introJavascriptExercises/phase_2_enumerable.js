Array.prototype.myEach = function(callback) {

  for (let i = 0; i < this.length; i ++) {
    callback(this[i]);
  }

}

function mulitpleTwo(num) {
  return num * 2;
}

console.log([1,2,3,4].myEach(mulitpleTwo()));