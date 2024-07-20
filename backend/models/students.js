const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ref} = require('joi')
const Course = require('./subjects')

const studentSchema = new Schema({
    student:{
        rollno : Number,
        name:String,
    },
    // courses : [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref : 'Course'
    //     }
    // ]
    courses:[{
        name:String,
        code:String,
        present:Number,
        total: Number,
    }]
})

module.exports = mongoose.model('Student',studentSchema)