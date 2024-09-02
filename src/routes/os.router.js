const { getAll } = require('../controllers/os.controller')
const express = require('express')
const verifyJWT = require('../utils/verifyJWT')

const routerOs = express.Router()

routerOs.route('/')
    .get(getAll)
    
module.exports = routerOs;