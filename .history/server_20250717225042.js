require("dotenv").config();
const mongoose = require("mongoose");

// Replace <PASSWORD> in the string with the actual password from .env
const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("✅ Connected to MongoDB");
	})
	.catch((err) => {
		console.error("❌ MongoDB connection failed:", err.message);
	});
