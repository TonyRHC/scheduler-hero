var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

const UserSelectionSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    dates: {
        type: [Object],
        required: true,
    }
});

const UserSelection = mongoose.model('userSelection', UserSelectionSchema);
module.exports = userSelection;