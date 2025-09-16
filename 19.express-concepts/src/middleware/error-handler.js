class APIError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		this.name = "APIError";
	}
}

const asyncHandler = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

const globalErrorHandler = (err, req, res, next) => {
	console.log(err.stack);

	if (err instanceof APIError) {
		return res.status(err.stack).json({
			status: "error",
			message: err.message,
		});
	} else if (err.name === "validationError") {
		return res.status(400).json({
			status: "error",
			message: "Validation Error",
		});
	} else {
		return res.status(400).json({
			status: "error",
			message: "An unexpected error occured",
		});
	}
};

module.exports = {
	APIError,
	asyncHandler,
	globalErrorHandler,
};
