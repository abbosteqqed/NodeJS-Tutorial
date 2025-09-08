const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
	const authToken = req.headers["authorization"];
    

	if (!authToken) {
		return res.status(401).json({
			success: false,
			message: "Access diened. No token provided. Please login to continue.",
		});
	}

	try {
		const token = authToken.split(" ")[1];
		const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
		req.userInfo = payload;
		next();
	} catch (e) {
		res.status(401).json({
			success: false,
			message: "Access diened. No token provided. Please login to continue.",
		});
	}
};

module.exports = authMiddleware;
