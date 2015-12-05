//function expression
var callMe = function callMet () {
	console.log("Called");
}
//functions are first class pass function as argument
function callGreet (fun) {
	fun();
}
callGreet(callMe);

//fun expr on fly
callGreet(function ola () {
	console.log("Wassup nav");
});