const asyncHandler = require('express-async-handler')

const Employee = require('../models/employeeModel')


/** 
 * Get Employe 
 * @desc Get Employee
 * @route GET api/employee
 * @author Birhanu Shimles <https://github.com/Birhanus>
 */
const getEmployee = asyncHandler(async (req, res) => {
    const employees = await Employee.find()
    res.status(200).json({employees})
})

/**
 * Add Employee 
 * @desc add Employee
 * @route POST api/employee 
 */ 
const addEmployee = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Add the text filed please')
    }

    const employees = await Employee.create({
        name: req.body.name,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        salary: req.body.salary
    })

    res.status(200).json(employees)
})

/**
 * Update employee data
 * @desc update Employee
 * @route PUT api/employee/:id
 */ 
const updateEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id)

    if (!employee) {
        res.status(400)
        throw new Error('employee nof found')
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body,
        {new: true,})
    res.status(200).json(updatedEmployee)
})


/**
 * Delete Employee
 * @desc delete Employee
 * @route DELETE api/employee/:id
 */
const deleteEmployee = asyncHandler(async (req, res) => {

    const employee = await Employee.findById(req.params.id)

    if (!employee) {
        res.status(400)
        throw new Error('employee nof found')
    }

    await employee.remove()
    res.status(200).json({id: req.params.id})
})

module.exports ={
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
}