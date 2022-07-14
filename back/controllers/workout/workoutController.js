import asyncHandler from "express-async-handler";
import Workout from "../../models/workoutModule.js";

export const addNewWorkout = asyncHandler(async (req, res) => {
    const {name, exerciseIds} = req.body
    const workout = await Workout.create({
        name,
        exercises: exerciseIds
    })
    res.json(workout)
})

export const getWorkout = asyncHandler(async (req, res) => {
	const workout = await Workout.findById(req.params.id)
		.populate('exercises')
		.lean()
	const minutes = Math.ceil(workout.exercises.length * 3.7)
	res.json({...workout,minutes  })
})

export const getWorkouts = asyncHandler(async (req, res) => {
	const workouts = await Workout.findById({})
		.populate('exercises')
	res.json(workouts)
})

export const updateWorkout = asyncHandler(async (req,res)=>{
    const {name, exerciseIds, workoutId} = req.body
    const workout = await Workout.findById(workoutId)
    if(!workout){
        res.status(404)
        throw new Error('Данная тренировака не найдена!!!!!!!!!!!')
    }
    workout.name = name
    workout.exercise = exerciseIds
    const upadateWorkout = await workout.save()
    res.json(upadateWorkout)
})

export const deleteWorkout = asyncHandler(async (req,res)=>{
    const { workoutId } = req.body
    const workout = await Workout.findById(workoutId)
    if(!workout){
        res.status(404)
        throw new Error('Данная тренировка не найдена!!!!!!!!!!!')
    }

    await workout.delete()
    res.json({message: "Workout has been deleted"})
})
