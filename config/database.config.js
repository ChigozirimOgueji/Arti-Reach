import mongoose from "mongoose";

function connectToMongoDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("MongoDB is connected")
    })
    .catch((err) => {
        console.log("Error connecting to mongodb", err.message)
    })
}

export default connectToMongoDB;