//function statement
function greet () {
	console.log("Hello Nav");
}
greet();

//functions are first class pass function as argument
function callGreet (fun) {
	fun();
}
callGreet(greet);