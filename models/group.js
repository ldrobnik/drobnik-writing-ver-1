var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    fixedOrder: {type: Boolean, required: true}, // when chosen randomly, whether the texts should be read sequentially or in any order
    color: {type: String}, // theme colour
    video: {type: String}, // name of the video file to be loaded into the jumbotron
    texts: [{type: Schema.Types.ObjectId, ref: 'Text'}] // group of texts it belongs to
});

module.exports = mongoose.model('Group', schema); // exports the Group model with the structure defined above