const mongoose = require('mongoose');
const Schema = mongoose.Schema;





let Record = new Schema({
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
        type: Boolean
    }
});

module.exports = mongoose.model('Record', Record);

