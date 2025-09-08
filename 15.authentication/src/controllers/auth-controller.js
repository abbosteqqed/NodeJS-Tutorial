const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

// Register Controller
const register = async (req, res) => {
	try {
		const { username, email, password, role } = req.body;

		// Check the email is in our database or not
		const existingUser = await User.findOne({
			$or: [{ email }, { username }],
		});

		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User is alredy exist by either username or email.",
			});
		}

		// Hash Password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = await User.create({
			email,
			password: hashedPassword,
			role,
			username,
		});

		if (newUser) {
			res.status(201).json({
				success: true,
				message: "User registered successfully.",
			});
		} else {
			res.status(400).json({
				success: false,
				message: "User is unable to register.",
			});
		}
	} catch (e) {
		console.log(e);

		res.status(500).json({
			success: false,
			message: "Something went wrongly. Please try again later.",
		});
	}
};

// Login Controller
const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		// Check user exist
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(400).json({
				success: false,
				message: "Invalid username or password",
			});
		}

		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (!isPasswordMatch) {
			return res.status(400).json({
				success: false,
				message: "Invalid username or password",
			});
		}

		const accessToken = jwt.sign(
			{
				userId: user._id,
				username: user.username,
				role: user.role,
			},
			secretKey,
			{
				expiresIn: "15m",
			}
		);

		res.status(200).json({
			success: true,
			message: "Successfully login",
			accessToken,
		});
	} catch (e) {
		console.log(e);

		res.status(500).json({
			success: false,
			message: "Something went wrongly. Please try again later.",
		});
	}
};

module.exports = {
	register,
	login,
};
