const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://saiganeshpunnam:lGXdtKQJ9b9z6D1o@newcluster0.f2h2dew.mongodb.net/?retryWrites=true&w=majority";
//connecting to mongo using url
const connectToMongo = async()=>{
    await mongoose.connect(mongoURI);
    console.log("connected to mongodb");
}

module.exports = connectToMongo