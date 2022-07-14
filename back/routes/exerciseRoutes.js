import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
    addNewExercise,
    deleteExercise,
    getExercise,
    updateExercise
} from "../controllers/exercise/exerciseController.js";
import {
    addNewExerciseLog,
    getExerciseLog,
    updateCompletedExerciseLog,
    updateExerciseLog,
} from "../controllers/exercise/exerciseLogController.js";

const router = express.Router()

router.route('/')
    .post(protect, addNewExercise)
    .get(protect,getExercise)
    .put(protect, updateExercise)
    .delete(protect, deleteExercise)
router.route('/log').post(protect, addNewExerciseLog).put(protect,updateExerciseLog)
router.route('/log/completed').put(protect,updateCompletedExerciseLog)
router.route('/log/:id').get(protect, getExerciseLog)
export default router