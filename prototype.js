//constructor
function PrintStuff (myDocs) {
	this.doc = myDocs;
}
//add print method so other objects can inherit it
PrintStuff.prototype.print = function() {
	console.log(this.doc);
};
//create new obj with PrintStuff constructor
//this allows to inherit PrintDtuff properties and methods
var newObj = new PrintStuff("I am new obj and I can print");
newObj.print();
