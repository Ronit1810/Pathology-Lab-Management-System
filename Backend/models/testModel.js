/* eslint-disable no-undef */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    TestName:{
        type:String,
        required:true
    },
    TestDescription:{
        type:String,
        required:true
    },
    TestImageLink:{
        type:String,
        default:"https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
    },
    Price:{
        type:Number,
        required:true
    },
    Fasting:{
        type:String,
        required:true
    },
    NormalRange:{
        type:String,
        required:true
    },
    AbnormalRange:{
        type:String,
        required:true
    },
    Date:{
        type:String
    }
},{
    timestamps:{
        createdAt:true,
        updatedAt:true
    }
})

const repo = mongoose.model('test',schema)
module.exports = repo