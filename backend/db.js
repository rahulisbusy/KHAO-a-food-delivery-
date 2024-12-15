import pkg from "mongoose";
const { connect, connection } = pkg;

const mongoURI =
  "mongodb+srv://rahulchakraborty2003:12345@cluster0.n8ez8.mongodb.net/khaoappmern?retryWrites=true&w=majority&appName=Cluster0";

const mongodb = async () => {
  try {
    // Connect to MongoDB
    await connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected");

    // Fetch data from 'items' collection
    const itemsCollection = connection.db.collection("items");
    const itemsData = await itemsCollection.find({}).toArray();

    // Fetch data from 'category' collection
    const categoryCollection = connection.db.collection("category");
    const categoryData = await categoryCollection.find({}).toArray();

    // Set global variables
    global.items = itemsData;
    global.category = categoryData;
    console.log('Items',global.items);
    console.log('Categories',global.category);
    // Log results for debugging
    
  } catch (err) {
    console.error("Error connecting to MongoDB or fetching data:", err);
  }
};

export default mongodb;
