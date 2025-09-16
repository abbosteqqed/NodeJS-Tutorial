const cors = require("cors");

const configureCors = () => {
	return cors({
		// Origin -> this will tell that which origins you want user can access your api
		origin: (origin, callback) => {
			const allowedOrigins = [
				"http://localhost:3000",
				"https://yourdomain.com",
			];

			if (!origin || allowedOrigins.indexOf(origin) !== -1) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by cors"));
			}
		},
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
		exposedHeaders: ["X-Total-Count", "Content-Range"],
		credentials: true, // enable support for cookies
		preflightContinue: false,
		maxAge: 600, // Cache pre flight reponses for 10 min. Avoid sending options request multiple times
		optionsSuccessStatus: 204,
	});
};

module.exports = {
	configureCors,
};
