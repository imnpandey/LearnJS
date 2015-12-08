/*function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("Acar,aman,amaraca"));
//acaramanamaraca

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = 'a';
  
  (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);
    
  })(456);
})(123);*/

function log (a) {
	//eval(a);
	console.log(a);
	a();
}

log(function () {
	console.log('hi');
});