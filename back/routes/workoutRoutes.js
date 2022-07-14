import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
    addNewWorkout,
    deleteWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout
} from "../controllers/workout/workoutController.js";
import {
    addNewWorkoutLog,
    getWorkoutLog,
    updateCompleteWorkoutLog
} from "../controllers/workout/workoutLogController.js"

const router = express.Router()

router.route('/')
    .post(protect, addNewWorkout)
    .get(protect,getWorkouts)
    .put(protect, updateWorkout)
    .delete(protect, deleteWorkout )
router.route('/log')
    .post(protect, addNewWorkoutLog)
    .put(protect, updateCompleteWorkoutLog)
router.route('/log/:id')
    .get(protect, getWorkoutLog)
router.route('/:id')
    .get(protect, getWorkout)
export default router