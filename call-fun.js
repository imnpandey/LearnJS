//by value
function change (b) {
	b = 2;
}

var a = 1;
change(a);
console.log(a);

//by ref

function changeObj (d) {
	d.p1 = function () {};
	d.p2 = {};
}

var c = {};
c.p1 = {};
changeObj(c);
console.log(c);