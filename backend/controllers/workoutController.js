const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}

// get aa single workout
const getSingleWorkout = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workouts"})
    }
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }

    res.status(200).json(workout)
}

// create new workout
const createWorkout = async (req,res)=>{
    const {title,load,reps} = req.body
    try{
            const workout = await  Workout.create({title,load,reps})
            res.status(200).json(workout)
    }catch(err){
        res.status(400).json({err:err.message})
    }
}

// delete a workout
const deleteWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workouts"})
    }

    const workout = await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }

    res.status(200).json({workout})


}

// update a workout
const updateWorkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workouts"})
    }

    const workout = await Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    },{"new":true})

   
    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }

    res.status(200).json(workout)

}



module.exports = {createWorkout,getWorkouts,getSingleWorkout,deleteWorkout,updateWorkout}