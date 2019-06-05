const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teachersSchema = new Schema({
    name: {
        type: String

    },
    skill:{
        type:[]
    },
    
    country: {
        type: String
    },
    age: {
        type: Number
    },
    bio: {
        type: String
    },
    createAt: {
        type: Date
    }
});

module.exports = Teacher = mongoose.model('teacher', teachersSchema);
