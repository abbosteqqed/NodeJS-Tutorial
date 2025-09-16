const express = require("express");
const { asyncHandler } = require("../middleware/error-handler");

const router = express.Router();

const items = [
	{
		id: 1,
		title: "Item 1",
	},
	{
		id: 2,
		title: "Item 2",
	},
	{
		id: 3,
		title: "Item 3",
	},
	{
		id: 4,
		title: "Item 4",
	},
	{
		id: 5,
		title: "Item 5",
	},
];

router.get(
	"/items",
	asyncHandler(async (req, res) => {
		res.json(items);
	})
);

module.exports = router;
