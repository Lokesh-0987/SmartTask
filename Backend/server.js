require("dotenv").config();
const mongoose = require("mongoose");

const DB = process.env.MONGO_STRING.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB)
	.then(() => {
		console.log("✅ Connected to MongoDB");
	})
	.catch((err) => {
		console.error("❌ MongoDB connection failed:", err.message);
	});
