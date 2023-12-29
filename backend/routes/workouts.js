const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,

} = require('../controllers/workoutController');
const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);


// GET a single workout
router.get('/:id', getWorkout);


// POST a new workouts
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);


// UPDATE a workout
router.patch('/:id', updateWorkout);


module.exports = router;

// #7 (Controllers 2) : 

// 658abf669aa660ae7c94d360