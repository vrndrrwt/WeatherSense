const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/WeatherDB"; // Replace with your valid connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to database successfully");
    } catch (err) {
        console.error("Failed to connect to database:", err);
    } finally {
        await client.close();
    }
}

connectToDatabase();
