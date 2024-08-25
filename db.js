const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Scythe:Scythe_504@scythedb.afecjzv.mongodb.net/")
//schema

const todoSchema = new mongoose.Schema({
    title: String,
    descroption: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}