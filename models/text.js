var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String}, // name of the text, also used in routing
    nameEN: {type: String}, // English name, if different from above
    title: {type: String}, // title of the text
    subtitle: {type: String}, // subtitle of the text
    description: {type: String}, // description of the text
    titleEn: {type: String}, // English title of the text
    descriptionEn: {type: String}, // English description of the text
    group: {type: Schema.Types.ObjectId, ref: 'Group'}, // group of texts it belongs to
    position: {type: Number}, // sequential position within the group
    filename: {type: String} //name of the file holding the text
});

module.exports = mongoose.model('Text', schema); // exports the Text model with the structure defined above