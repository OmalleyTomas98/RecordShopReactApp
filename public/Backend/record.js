
//Define mongo and schema 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create/define record Object Scehema to access the mongoDB
let Record = new Schema({


    //Define and object variables and their dataTypes
    record_description: {
        type: String
    },
    record_artist: {
        type: String
    },
    record_year:  {
        type: String
    },
    record_listened: {
        type: String
    }
});

//Export Record model
module.exports = mongoose.model('Record', Record);

