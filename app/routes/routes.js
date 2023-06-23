module.exports = (app) => {
    
        const students = require('../controllers/controllers');
        const express = require('express');
        const router = express.Router();
    
        app.get('/students', students.findAll);

        app.get('/students/:id', students.findOne);

        app.post('/students', students.create);

        app.put('/students/:id', students.update);
        
        app.delete('/students/:id', students.delete);
  };