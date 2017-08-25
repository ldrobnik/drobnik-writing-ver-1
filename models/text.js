var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true}, // title of the text
    description: {type: String, required: true}, // description of the text
    group: {type: Schema.Types.ObjectId, ref: 'Group'}, // group of texts it belongs to
    position: {type: Number, required: true}, // sequential position within the group
    filename: {type: String} //name of the file holding the text
});

module.exports = mongoose.model('Text', schema); // exports the Text model with the structure defined above