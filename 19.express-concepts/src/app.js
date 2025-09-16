require("dotenv").config();
const express = require("express");
const { configureCors } = require("./config/cors-config");
const {
	addTimeStamp,
	requestLogger,
} = require("./middleware/custom-middleware");

const { globalErrorHandler } = require("./middleware/error-handler");
const { urlVersioning } = require("./middleware/apiVersioning");
const { createBasicRateLimiter } = require("./middleware/rateLimiting");
const itemRoutes = require("./routes/item-routes")

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());

app.use(createBasicRateLimiter(3, 15 * 60 * 1000)); // 100 requests per minuter

app.use(express.json());
app.use(urlVersioning("v1"));
app.use("api/v1", itemRoutes)

app.use(globalErrorHandler);

app.listen(PORT, () => {
	console.log(`Server is running ${PORT}`);
});
