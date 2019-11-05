const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_description:{
        type:String
    },
    todo_responsible:{
        type:String
    }, 
    todo_priority:{
        type:String
    },
     todo_completed:{
        type:String
    },todo_date:{
        type:Date,
        
    },todo_image:{
        type:String
    }
})

module.exports = mongoose.model('Todo', Todo);