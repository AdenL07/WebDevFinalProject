// controllers/taskController.js
const Task = require('../models/task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.userId });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createTask = async (req, res) => {
    try {
        const newTask = new Task({ ...req.body, userId: req.userId });
        const saved = await newTask.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create task' });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const updated = await Task.findOneAndUpdate(
            { _id: req.params.id, userId: req.userId },
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update task' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to delete task' });
    }
};
