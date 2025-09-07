const myMiddleware = (req, res, next) => {
	console.log(req.params);
	console.log("Middleware is working");

	next();
};

module.exports = {
	myMiddleware,
};
