const mongoose = require("mongoose");

const { Schema } = mongoose

const querrySchema = new Schema({
    querry: String,
    counter: Number
})
mongoose.model('querries', querrySchema)