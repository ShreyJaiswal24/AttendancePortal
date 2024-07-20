const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const cors = require('cors')
require('dotenv').config(); //isko use karne ke liye npm i dotenv karna padta.
const Student= require('./models/students')
const Course = require('./models/subjects')
const students = require('./models/students')
const dbURL = process.env.DB_URL;
//console.log(dbURL)
// mongoose.connect('mongodb://127.0.0.1:27017/AttendanceProject')
// .then(()=>{
//     console.log('DATABASE CONNECTED')
// }).catch((e)=>{
//     console.log('ERROR',e)
// })

mongoose.connect(dbURL);  
const db=mongoose.connection;
db.on("error",console.error.bind(console,'Connection Error: '))
db.once("open", ()=> {
    console.log("DATABASE CONNECTED")
})

app.use(cors())
app.use(express.urlencoded({extended:true}))
//app.use(express.json())
app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    //const student = await Student.findOne({'student.rollno':'23085087'})
    res.send('Hello')
})

app.get('/update',async(req,res)=>{
    const studentData = await Student.find({})
    const courses = await Course.find({});
    //console.log(courses)
    //console.log(studentData)
    res.send(studentData)
})

app.get('/user/:rollNo',async(req,res)=>{
    const {rollNo} = req.params;
    const student = await Student.findOne({'student.rollno':rollNo})
    res.send(student)
})

app.get('/user/:rollNo/:course',async(req,res)=>{
    const {rollNo,course} = req.params
    const student = await Student.findOne({'student.rollno':rollNo})
    let details={}
    student.courses.map(c => {
        key = c._id
        if(c.code===course)
            details=c
    })
    res.send(details)
})

app.put('/update/:rollNo/:course/present',async(req,res)=>{
    const {rollNo,course} = req.params;
    const student = await Student.findOne({'student.rollno':rollNo})
    let details=[]
    student.courses.map(c => {
        key = c._id
        if(c.code===course){
            c.present++;
            c.total++;
            //jaise get mai humne res.send detail ki vaise isme bhi res.send detail
            //karke backend Data ko update kar sakte hain.
            details=c;
        }
    })
    student.save();
    res.send(details)
})

app.put('/update/:rollNo/:course/absent',async(req,res)=>{
    const {rollNo,course} = req.params;
    const student = await Student.findOne({'student.rollno':rollNo})
    let details={};
    student.courses.map(c => {
        key = c._id
        if(c.code===course){
            c.total++;
            details=c;
        }
    })
    student.save();
    res.send(details)
})

app.listen('3000',()=>{
    console.log('LISTENING ON PORT 3000')
})

//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