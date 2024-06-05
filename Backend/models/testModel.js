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
        default:"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
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