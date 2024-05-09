const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        const connect = mongoose.connect("mongodb+srv://prathamdc2498:pdc1mongodbin@eyefundapplication.h5itzer.mongodb.net/mycontacts-backend?retryWrites=true&w=majority&appName=eyeFundApplication")
        console.log("DataBase connected ");
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
};

module.exports = connectDb;