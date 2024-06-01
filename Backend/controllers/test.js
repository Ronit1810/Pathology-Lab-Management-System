/* eslint-disable no-undef */

const testModel = require('../models/testModel.js')


exports.postTest = async (req,res) => {
    try {
        const body = req.body;
        const isDataExist = await testModel.findOne({TestName:body.TestName});
        if (isDataExist) {
            res.status(202).send({
                success: false,
                message: "Test already exist in database",
            })
        }else{
            const dataEnter = await testModel.create(body)
            res.status(200).send({
                success: true,
                message: "Test added successfully",
                data:dataEnter,
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in controllers/test.js/postTest",
            error,
        })
    }
}



exports.getTest = async (req,res) => {
    try {
        const data = await testModel.find({})
        if (data) {
            res.status(200).send({
                success: true,
                message: "test details fetched successfully",
                testData : data
            })
        } else {
            res.status(202).send({
                success: true,
                message: "No test data is available",
            })
            
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in controllers/test.js/getTest",
            error
        })
    }
}


exports.getTestById = async (req,res) => {
    const {id} = req.params;
    try {
        const testData = await testModel.findById(id)
        if (testData) {
            res.status(200).send({
                status: true,
                message: "test available",
                test: testData
            })
        } else {
            res.status(202).send({
                status: true,
                message: "not test available by id"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: false,
            message: "error in controllers/test.js/getTestById",
            error
        })
    }
}