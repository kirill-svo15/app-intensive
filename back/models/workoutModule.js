import mongoose from 'mongoose'

const {ObjectId} =mongoose.Schema

const workoutSchema = mongoose.Schema(
	{
		name: {type:String, required: true},
		exercises: [{
			type: ObjectId,
			ref: "Exercise"
		}]
	},
	{
		minimize: false,
		timestamps: true,
	}
)

const workout = mongoose.model('Workout', workoutSchema)

export default workout
