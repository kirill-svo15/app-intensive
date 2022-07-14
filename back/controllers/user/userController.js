import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import ExerciseLog from "../../models/exerciseLogModel.js";
import WorkoutLog from "../../models/workoutLogModel.js";

export const getUserProfile = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id).select('-password').lean()
    const exerciseLogByUser =await ExerciseLog.find({
        user: user._id,
        completed: true
    })
    let countExerciseTimes = 0
    let kgs = 0
    exerciseLogByUser.forEach(item =>{
        countExerciseTimes += item.times.length
        item.times.forEach(i=>{
            kgs +=  i.weight
        })
    })
    const minutes =Math.ceil(countExerciseTimes * 2.3)
    const workouts = await WorkoutLog
        .find({user: user._id, completed: true}).countDocuments()
    res.json({
        ...user,
        minutes,
        workouts,
        kgs
    })
})