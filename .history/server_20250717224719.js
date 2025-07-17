const mongoose = require("mongoose");

const DB_URI = process.env.MONGO_STRING.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
	.connect(DB_URI, repla {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("✅ Connected to MongoDB");
	})
	.catch((err) => {
		console.error("❌ MongoDB connection failed:", err.message);
	});
