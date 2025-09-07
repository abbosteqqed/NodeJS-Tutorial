import mongoose from "mongoose";

mongoose
	.connect("mongodb+srv://abbos:Abbos1997@cluster0.hubfq.mongodb.net/test-1")
	.then(() => console.log("Database connected successfully"));

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
	isActive: Boolean,
	tags: [String],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model("User", userSchema);

const createUser = async () => {
	try {
		const user = await User.create({
			name: "Abbos",
			email: "abbos@teqqed.com",
			age: 28,
			isActive: true,
			tags: ["Developer", "React"],
		});
		console.log(user);
	} catch (e) {
	} finally {
		console.log("Finished");
	}
};

const getAllUsers = async () => {
	try {
		const users = await User.find();
		console.log(users);
	} catch (e) {
	} finally {
		console.log("Finished");
	}
};

const updateUser = async () => {
	try {
		const user = await User.updateOne(
			{ _id: Object("68bc06273afd4c029de5687b") },
			{ name: "Bobur" }
		);
		console.log(user);
	} catch (e) {
	} finally {
		console.log("Finished");
	}
};


