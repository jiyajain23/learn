const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Function to generate dummy data
const generateDummyEmployees = () => {
    const cities = ['New York', 'London', 'Tokyo', 'Berlin', 'Paris', 'Sydney'];
    const languages = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'Go'];
    const names = [
        'John Doe', 'Jane Smith', 'Robert Johnson', 'Emily Davis', 
        'Michael Brown', 'Sarah Wilson', 'David Taylor', 'Jessica Anderson',
        'Thomas Martinez', 'Jennifer Robinson'
    ];
    
    const employees = [];
    
    for (let i = 0; i < 10; i++) {
        employees.push({
            name: names[i],
            salary: Math.floor(Math.random() * 100000) + 50000,
            language: languages[Math.floor(Math.random() * languages.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            isManager: Math.random() > 0.7
        });
    }
    
    return employees;
};

// Generate data endpoint
router.post('/generate-data', async (req, res) => {
    try {
        // Clear existing data
        await Employee.deleteMany({});
        
        // Generate and insert new dummy data
        const dummyEmployees = generateDummyEmployees();
        await Employee.insertMany(dummyEmployees);
        
        res.json({
            message: 'Dummy data generated successfully',
            count: dummyEmployees.length,
            employees: dummyEmployees
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all employees endpoint
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.json({
            count: employees.length,
            employees: employees
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;