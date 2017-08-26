var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true}, // title of the publication as seen on the timeline
    description: {type: String}, // description of the publication (in Polish) shown in a modal
    descriptionEn: {type: String}, // as above, but in English
    photo: {type: String}, // name of image file showing the cover
    year: {type: Number}, // year of publication
    month: {type: Number} // month of publication
});

module.exports = mongoose.model('Publication', schema); // exports the Publication model with the structure defined above