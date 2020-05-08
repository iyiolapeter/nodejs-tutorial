const mongoose = require('mongoose');
require('./../config');

const TaskSchema = new mongoose.Schema({
    name: mongoose.SchemaTypes.String
}, {
    timestamps: true
});

const Task = mongoose.model('Task', TaskSchema, 'tasks');

const task = new Task({
    name: 'Teach A Class By Tomorrow Evening'
});

// task.save().then((doc)=>{
//     console.log('Document saved', doc);
// }).catch((error) => {
//     console.error(error);
// })

module.exports = {
    TaskSchema,
    Task
}