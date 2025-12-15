const mongoose = require ('mongoose')
require('dotenv').config();
const dbURL = process.env.DB_URL;
mongoose.connect(dbURL);
const db=mongoose.connection;
db.on("error",console.error.bind(console,'Connection Error: '))
db.once("open", ()=> {
    console.log("DATABASE CONNECTED")
})

const Student = require('../models/students.js')
const Course = require('../models/subjects.js')
const {names,rollno,subject} = require ('./data.js')
const codes = ['ma201','me101','eo201','ee221','ee261','h104'];

    const seedDBStudents = async() => {
        await Student.deleteMany({})
        for(let i=0;i<170;i++){
            let courseData = [];
            for(let j=0;j<6;j++){
                const data = {
                    name:subject[j],
                    code:codes[j],
                    present: Math.ceil(Math.random()*32),
                    total: 32
                }
                //console.log(Math.ceil(Math.random()*t[j]))
                courseData.push(data)
            }
            const s = new Student({
                student:{
                    rollno:rollno[i],
                    name:names[i],
                },
                courses: courseData
            })
            await s.save()
        }
    }

    seedDBStudents().then(()=>mongoose.connection.close())
