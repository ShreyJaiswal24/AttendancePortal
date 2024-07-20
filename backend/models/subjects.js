const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ref} = require('joi')
const Student = require('./students')

const courseSchema = new Schema({
    course:{
        name:String,
        present:Number,
        total: Number,
    },
    // students:[{
    //     type:Schema.Types.ObjectID,
    //     ref: 'Student'
    // }]
})

module.exports = mongoose.model('Course',courseSchema)