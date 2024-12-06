const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017/weatherDB"; // Example for local MongoDB
const client = new MongoClient(url);

async function connectToDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } finally {
        await client.close();
    }
}

connectToDB();
