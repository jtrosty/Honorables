const mongoose = require('mongoose');

const wikiDataSchema = new mongoose.Schema({
    assignment: {
        type: Number
    },
    title: {
        type: String
    }, 
    coordinates: {
        type: Array
    }, 
    description: {
        type: String
    }, 
    image: {
        type: String
    },
    wikiUrl: {
        type: String
    }
});

//will automatically create table inside of mongodb if it does not exist 
const wikiDataModel = mongoose.model("wikidatabases", wikiDataSchema);
module.exports = wikiDataModel;
