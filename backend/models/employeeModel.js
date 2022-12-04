const  mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
   {
    name: {
        type: String,
        required: [true, 'Name is required please insert name ']
    },
    date_of_birth: {
        type: Number,
        required: [true, 'Date of birth is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required']
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    },
   },
   {timestamps: true},

)

 module.exports = mongoose.model('Employee', employeeSchema)