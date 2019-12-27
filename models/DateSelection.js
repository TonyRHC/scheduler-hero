var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

const DateSelectionSchema = new Schema({
    dates: {
        type: [Object],
        required: true,
    }
});

const DateSelection = mongoose.model('dateSelection', DateSelectionSchema);
module.exports = DateSelection;