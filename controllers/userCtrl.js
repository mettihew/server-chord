const User = require('../models/userModel')
const Message = require('../models/messageModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const ObjectId = require('mongodb').ObjectId

const getOne = async (req, res) => {
  const { username } = req.body
  const user = await User.findOne({ username })
  res.send(user)
}

const get = async (req, res) => {
  // const all = await User.deleteMany()
  const all = await User.find()
  res.send(all)
}

const register = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const passwordHashed = await bcrypt.hash(password, 12)
    const user = { username, email, password: passwordHashed }
    const token = jwt.sign({ user_id: user._id, email }, 'MettihewToken')
    const userTest = await User.create(user)
    userTest.token = token
    res.send(userTest)
  } catch (err) {
    throw new Error(err)
  }
}

const signIn = async (req, res) => {
  const { email, password } = req.body
  const findUser = await User.find({ email })
  const theUser = findUser[0]
  if (!theUser) return res.status(404).send('user not found')
  const thePassword = await bcrypt.compare(password, theUser.password)
  if (!thePassword) return res.status(401).send("Username or password is wrong")
  if (theUser && thePassword) {
    const token = jwt.sign({ user_id: theUser._id, email }, 'MettihewToken', { expiresIn: 60 * 60 })
    theUser.token = token
    res.json(theUser)
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

const avatar = async (req, res) => {
  const { _id, url } = req.body
  try {
    const update = await User.findByIdAndUpdate(_id, { avatar: url }, { new: true })
    res.status(201).json(update)
  } catch (err) {
    throw new Error(err)
  }
}

const message = async (req, res) => {
  try {
    const message = await Message.create(req.body)
    res.json(message)
  } catch (error) {
    throw new Error(error);
  }
}

const deleteMessage = async (req, res) => {
  const { mId } = req.body
  const del = await Message.findByIdAndDelete(mId)
  res.send(del)
}

const updateMessage = async (req, res) => {
  const { _id, text } = req.body
  const up = await Message.findByIdAndUpdate(_id, {text}, {new: true})
  res.send(up)
}


const getMessages = async (req, res) => {
  const { owner } = req.body
  try {
    const findOwnerMessages = await Message.find({ owner }).populate()
    res.json(findOwnerMessages)
  } catch (err) {
    throw new Error(err)
  }
}


module.exports = { register, get, signIn, updateDescription, message, deleteMessage, getMessages, avatar, getOne, updateMessage }