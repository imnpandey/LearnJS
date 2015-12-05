var person = {
	first: "Navneet",
	last: "Pandey",
	greet: function name () {
		console.log("Hello, " + this.first + " " + this.last);
	}
};

person.greet();
console.log(person['first']);