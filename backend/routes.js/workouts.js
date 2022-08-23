const express = require('express')
const {createWorkout,getSingleWorkout,getWorkouts,deleteWorkout,updateWorkout} = require('../controllers/workoutController')
const router = express.Router()


router.get('/',getWorkouts)

router.get('/:id',getSingleWorkout)

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)



module.exports = router