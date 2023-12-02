const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const get = async (req, res) => {
  // const all = await User.deleteMany()
  // localStorage.removeItem('user')
  const all = await User.find()
  res.send(all)
}

const register = async (req, res) => {
  const {username, email, password} = req.body
  console.log(req.body);
  try {
    const passwordHashed = await bcrypt.hash(password, 12)
    const user = {username, email, password: passwordHashed}
    const token = jwt.sign({user_id:user._id,email}, 'MettihewToken')
    console.log(token,'token----------------------------------');
    user.token = token
    const register = await User.create(user)

    console.log(user);
    res.send(user)
  } catch (err) {
    throw new Error(err)
  }
}

const signIn = async(req, res) => {
  const {email, password} = req.body
  try {
      const theUser = await User.findOne({email})
      if(!theUser) return res.status(404).send("User not found")
      const thePassword = await bcrypt.compare(password, theUser.password) 
      if(!thePassword) return res.status(401).send("Username or password is wrong")
      if(theUser && thePassword){
          const token = jwt.sign({user_id: theUser._id, email}, 'MettihewToken', {expiresIn:60 * 60})
          theUser.token = token
          res.json(theUser)    
      }
  } catch (error) {
      throw new Error(error)
  }
}

const updateDescription = async (req, res) => {
  const { _id, description } = req.body
  try {
    const update = await User.findByIdAndUpdate(_id, { description }, { new: true })
    res.status(201).json(update)
  } catch (err) {
    throw new Error(err)
  }

}

const message = async (req, res) => {
  const { _id, username, text } = req.body
  try {
    const update = await User.findByIdAndUpdate(_id, { $push:  { message: {username, text} }  }, { new: true })
    res.send(update)
  } catch (err) {
    throw new Error(err)
  }
}


module.exports = { register, get, signIn, updateDescription, message }