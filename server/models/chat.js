const mongoose = require('mongoose');

const chatDataSchema = new mongoose.Schema({
    profile: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String

    }
});

//will automatically create table inside of mongodb if it does not exist 
const chatDataModel = mongoose.model("chatdatabases", chatDataSchema);
module.exports = chatDataModel;
