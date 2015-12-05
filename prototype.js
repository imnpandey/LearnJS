function PrintStuff (myDocs) {
	this.doc = myDocs;
}

PrintStuff.prototype.print = function() {
	console.log(this.doc);
};

var newObj = new PrintStuff("I am new obj and I can print");
newObj.print();