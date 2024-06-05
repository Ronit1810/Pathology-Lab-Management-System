/* eslint-disable no-undef */
const patientModel = require("../models/patientModel.js");
const testModel = require("../models/testModel.js")

exports.patientDetail = async (req, res) => {
  try {
    const body = req.body;
    const patientData = await patientModel.create(body);
    if (patientData) {
      res.status(200).send({
        status: true,
        message: "Patient added successfully",
        data: patientData,
      });
    } else {
      res.status(202).send({
        status: true,
        message: "Patient not created",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: "error at controllers/patient.js/patientDetail",
      error,
    });
  }
};

exports.getPatientDetail = async (req, res) => {
  try {
    const data = await patientModel.find();
    if (data) {
      res.status(200).send({
        success: true,
        message: "Patient detail fetched successfully",
        data: data,
      });
    } else {
      res.status(202).send({
        success: true,
        message: "No Patient Found..",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error at controllers/patient.js/getPatientDetail",
      error,
    });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await patientModel.findById(id);
    if (data) {
      res.status(200).send({
        success: true,
        message: "Patient data fetched Successfully",
        data: data,
      });
    } else {
      res.status(202).send({
        success: true,
        message: "No Patient available by Id..",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error at controllers/patient.js/getPatientById",
      error,
    });
  }
};

exports.getPatientStatus = async (req, res) => {
    try {
      const { status } = req.params;
      const isData = await patientModel.find({ status: status }); // querying by status field
      res.status(200).send({
        success: true,
        message: "Successfully Fetched",
        data: isData,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error at controllers/patient.js/getPatientStatus",
        error,
      });
    }
  };





exports.updatePatient = async (req,res) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const data = await patientModel.updateOne({_id:id}, body)
    const updatedData = await patientModel.findById(id)
    if (data) {
      res.status(200).send({
        success: true,
        message: "Patient updated successfully",
        data: updatedData
      })
    }else{
      res.status(202).send({
        success: true,
        message: "Patient can't update"
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in controllers/patient.js/UpdatePatient",
      error
    })
  }
}
  


exports.patientTestDetail = async (req,res) => {
  try {
    const {id} = req.params;
    const patientData = await patientModel.findById(id)
    if (patientData) {
      const testDetail = await testModel.findById(patientData.SelectTest) //if patient is available searching in testmodel by testID
      res.status(200).send({
        success: true,
        message: "Patient Test Details Fetched successfully",
        patient: patientData,
        test: testDetail
      })
    }else{
      res.status(202).send({
        success: true,
        message: "can't fetched patient test detail"
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in controllers/patient.js/patientTestDetail",
      error
    })
  }
}



exports.deletePatient = async (req,res) => {
  try {
    const {id} = req.params;
    const deletepatient = await patientModel.deleteOne({_id:id})
    if (deletepatient.deletedCount>0) {
      res.status(200).send({
        success: true,
        message: "Patient delete successfully",
        data: deletepatient
      })
    } else {
      res.status(202).send({
        success: true,
        message: "Patient can't delete successfully"
      })
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in controllers/patient.js/deletePatient",
      error
    })
  }
}
