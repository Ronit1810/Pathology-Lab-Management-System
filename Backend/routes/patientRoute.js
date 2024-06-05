/* eslint-disable no-undef */

const express = require('express')
const controllers = require('../controllers/patient.js')

const route = express.Router()

route.post('/post',controllers.patientDetail)  //post patient
route.get('/get',controllers.getPatientDetail)  //get all patient data
route.get('/get/:id',controllers.getPatientById)  //get patient data by id
route.get('/status/:status',controllers.getPatientStatus)  //get patient by status(pending/completed)
route.put('/:id',controllers.updatePatient)  //update the patient details
route.get('/:id/testdetail',controllers.patientTestDetail)  //get test detail of patient
route.delete('/:id',controllers.deletePatient)  //delete the patient


module.exports = route