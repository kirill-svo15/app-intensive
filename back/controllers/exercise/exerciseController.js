import asyncHandler from "express-async-handler";
import Exercise from "../../models/exerciseModel.js";

export const addNewExercise = asyncHandler(async (req,res)=>{
    const {name,times,image}=req.body
    const exercise = await Exercise.create({
        name,
        times,
        image
    })
    res.json(exercise)
})

export const getExercise = asyncHandler(async (req, res) => {
	const exercise = await Exercise.find({})
	res.json({exercise})
})


export const updateExercise = asyncHandler(async (req,res)=>{
    const {name,times,image, exerciseId } = req.body
    const exercise = await Exercise.findById( exerciseId)
    if(!exercise){
        res.status(404)
        throw new Error('Данная упражнение  не найдено!!!!!!!!!!!')
    }
    exercise.name = name
    exercise.exercise = exerciseId
    exercise.times = times
    exercise.image = image
    const upadateWorkout = await exercise.save()
    res.json(upadateWorkout)
})

export const deleteExercise = asyncHandler(async (req,res)=>{
    const { exerciseId } = req.body
    const exercise = await Exercise.findById(exerciseId)
    if(!exercise){
        res.status(404)
        throw new Error('Данная упражнение  не найдено!!!!!!!!!!!')
    }

    await exercise.delete()
    res.json({message: "Exercise has been deleted"})
})
