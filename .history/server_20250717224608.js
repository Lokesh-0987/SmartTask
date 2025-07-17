const mongoose = require("mongoose");

const DB_URI = process.env.MONGO_STRING;

mongoose
	.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("✅ Connected to MongoDB");
	})
	.catch((err) => {
		console.error("❌ MongoDB connection failed:", err.message);
	});
