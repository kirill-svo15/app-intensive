import mongoose from 'mongoose'

const {ObjectId} = mongoose.Schema

const workoutLogSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        workout: [{
            type: ObjectId,
            ref: "Workout"
        }],
        completed: {type: Boolean, default: false},
        exerciseLog:[{
            type:ObjectId,
            ref:"ExerciseLog"
        }]
    },
    {
        minimize: false,
        timestamps: true,
    }
)

const workoutLog = mongoose.model('WorkoutLog', workoutLogSchema)

export default workoutLog
