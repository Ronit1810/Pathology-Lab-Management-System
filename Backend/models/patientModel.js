/* eslint-disable no-undef */


const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    status:{
        default: "pending",
        type:String
    },
    Mobile:{
        type:Number,
        required:true
    },
    Adderss:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    ExaminedBy:{
        type:String,
        required:true
    },
    ExaminedDate:{
        type:String,
        required:true
    },
    SelectTest:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    ReportDate:{
        type:String,
        required:true
    },
    result:[
        {
            name:{
                type:String,
                required:true
            },
            range:{
                type:String,
                required:true
            },
            unit:{
                type:String,
                required:true
            },
            result:{
                type:String,
                required:true
            }
        }
    ]
})


const patientRepo = mongoose.model('patient',schema)
module.exports = patientRepo