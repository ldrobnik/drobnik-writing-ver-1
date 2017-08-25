var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    id: {type: Schema.Types.ObjectId},
    inEnglish: {type: Boolean, required: true},
    group: {type: Number, required: true},
    position: {type: Number, required: true},
    fixedOrder: {type: Boolean, required: true}
});