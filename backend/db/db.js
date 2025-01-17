import mongoose from 'mongoose';

function connect() {
    const uri = process.env.MONGO_URI;

    if (!uri) {
        throw new Error("MONGO_URI is not defined. Please add it to the .env file.");
    }

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err.message);
            process.exit(1); // Exit the process if the connection fails
        });
}

export default connect;
