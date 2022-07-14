import asyncHandler from "express-async-handler";
import ExerciseLog from "../../models/exerciseLogModel.js";

export const addNewExerciseLog = asyncHandler(async (req, res) => {
    const {exerciseId, times} = req.body
    let timesArr = []
    for (let i = 0; i < times; i++) {
        timesArr.push({
            weight: 0,
            repeat: 0
        })
    }
    const exerciseLog = await ExerciseLog.create({
        user: req.user._id,
        exercise: exerciseId,
        times: timesArr
    })
    res.json(exerciseLog)
})

export const getExerciseLog = asyncHandler(async (req, res) => {
    const exerciseLog = await ExerciseLog.findById(req.params.id)
        .populate('exercise', 'name imageName').lean()

    const prevExerciseLogs = await ExerciseLog.find({
        user: req.user._id,
        exercise: exerciseLog._id
    }).sort({createdAt:'desc'})
    const rebuildTimes = (log, prevExLog = null) => {
        return log.times.map((item, index) => ({
            ...item,
            prevWeight: prevExLog ? prevExLog.times[index].weight : 0,
            prevRepeat: prevExLog ? prevExLog.times[index].repeat : 0,
        }))
    }
    const prevExLog = prevExerciseLogs[0]
    let newTimes = rebuildTimes(exerciseLog)
    if (prevExLog) newTimes = rebuildTimes(exerciseLog, prevExLog)
    res.json({
        ...exerciseLog,
        times: newTimes
    })
})

export const updateExerciseLog = asyncHandler(async (req, res) => {
    const {logId, timeIndex, key, value} = req.body
    const currentLog = await ExerciseLog.findById(logId)
    let newTimes = currentLog.times
    if (!currentLog) {
        res.status(404)
        throw new Error('не найден лог')
    }
    // if(!timeIndex || !key || !value){
    //     res.status(404)
    //     throw new Error("вы не указали поля")
    // }
    newTimes[timeIndex][key] = value
    currentLog.times = newTimes
    const updateLog = await currentLog.save()
    res.json(updateLog)
})

export const updateCompletedExerciseLog = asyncHandler(async (req, res) => {
    const {logId, completed} = req.body
    const currentLog = await ExerciseLog.findById(logId).populate('exercise', 'workout')
    if (!currentLog) {
        res.status(404)
        throw new Error('не найден лог')
    }
    currentLog.completed = completed
    const updateLog = await currentLog.save()

    res.json(updateLog)
})

export const getExerciseLogList = asyncHandler(async (req, res) => {
	const exerciseLogs = await ExerciseLog.find({
		user: req.user._id,
		completed: true,
	})
		.populate('exercise', 'name imageName')
		.select('exercise createdAt')
		.lean()

	if (!exerciseLogs) {
		res.status(404)
		throw new Error('Логи не найдены!')
	} else res.json(exerciseLogs)
})
