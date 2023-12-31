const Page = require('../models/pageModel')

const getStep1 = async (req, res) => {
  // const test = await Page.deleteMany()
  const test = await Page.find()
  res.send(test)
}

const Step1 = async (req, res) => {
  const test = await Page.create(req.body)
  res.send(test)
}

module.exports = { getStep1, Step1 } 