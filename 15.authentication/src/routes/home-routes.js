const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

router.get("/welcome", authMiddleware, (req, res) => {
	const userInfo = req.userInfo;

	console.log("User:", userInfo);
	res.status(200).json({
		success: true,
		message: "Welcome to the website.",
        user: {
            _id: userInfo.userId,
            username: userInfo.username
        }
	});
});

module.exports = router;
