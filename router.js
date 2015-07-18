function route (handle, pathname) {
	console.log("About to route a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		console.log("Works");
		handle[pathname]();
	}else{
		console.log("no request handler found for " + pathname);
	}

}

exports.route = route;