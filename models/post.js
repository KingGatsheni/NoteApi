const mongoose = require('mongoose');


//let m = tz.('africa/maseru');


const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    post: {
    type:String,
    required: true
    }
    
})
module.exports = mongoose.model('userPost', postSchema);
