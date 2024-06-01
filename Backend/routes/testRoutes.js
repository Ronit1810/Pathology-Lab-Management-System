/* eslint-disable no-undef */
const express = require('express')
const controllers = require('../controllers/test.js')

const route = express.Router()

route.post('/post',controllers.postTest)
route.get('/get',controllers.getTest)
route.get('/get/:id',controllers.getTestById)


module.exports = {route}