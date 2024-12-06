const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/weatherDB"; // Replace with your connection string

const client = new MongoClient(url);

async function registerUser(data) {
    try {
        await client.connect();
        const db = client.db();
        console.log("Connected to the database");

        await db.collection('users').insertOne(data);
        console.log("User registered successfully");
    } catch (err) {
        console.error("Error during registration:", err);
    } finally {
        await client.close();
    }
}

module.exports = registerUser;
