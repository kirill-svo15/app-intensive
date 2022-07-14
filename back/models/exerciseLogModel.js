import mongoose from 'mongoose'

const {ObjectId} = mongoose.Schema

const exerciseLogSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        workout: {
            type: ObjectId,
            ref: "Workout"
        },
        exercise: {
            type:ObjectId,
            ref:"Exercise",
        },
        times:[
            {
                weight:{type:Number,required: true},
                repeat:{type:Number,required: true},
                completed: {type: Boolean, default: false}
            }
        ],
        completed: {type: Boolean, default: false},
        workoutLog: {type:ObjectId, ref:"WorkoutLog", required:true}
    },
    {
        minimize: false,
        timestamps: true,
    }
)

const exerciseLog = mongoose.model('ExerciseLog', exerciseLogSchema)

export default exerciseLog
