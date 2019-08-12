const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    // console.log("HEREERERERERERERERER in  DB file")
    try {
        await mongoose.connect(db, { 
          useNewUrlParser: true,
          useCreateIndex: true
        });
        console.log("Connected to MongoDB");
    } catch(err) {
        console.error(err.message);
        //exit process without failure
        process.exit(1);
    }

}

module.exports = connectDB;
