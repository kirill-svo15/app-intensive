import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { generateToken } from '../../helpers/generateToken.js'

// @desc    Register user
// @route   POST /api/login
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({email})
	if(user && (await user.matchPassword(password))){
		const token = generateToken(user._id)
		res.json({user, token})

	} else{
		res.status(401)
		throw new Error('Не правильный пароль или email')
	}


	res.json({ user, token })
})
