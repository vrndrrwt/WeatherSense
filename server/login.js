const { MongoClient } = require('mongodb');

// Define the URL for the MongoDB connection
const url = "mongodb://localhost:27017/WeatherDB"; // For local MongoDB
// Or, for MongoDB Atlas:
// const url = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to the database successfully");
    } catch (err) {
        console.error("Failed to connect to the database:", err);
    } finally {
        await client.close();
    }
}

connectToDatabase();
