const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,    
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'user'
  },
  description: {
    type: String,
    default: "",
  },
  avatar:{
    type: String,
    required: false,
    default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAY1BMVEX///8AAAChoaH8/PyXl5dWVlZ8fHz09PSLi4t4eHipqamSkpLLy8s6OjrFxcXIyMjm5uZoaGi0tLQrKytGRkZycnJBQUEiIiLb29swMDAKCgoYGBjS0tJhYWG+vr7t7e1OTk4+ipyYAAADOklEQVRoge2Z23aqMBCGhYAgZwQ8W/r+T7knYDWHwaIZ7L6Yb61eNKC/SSb/TJLVimEYhmEYhmEYhmH+B0RUJD6QFJH4pG4Rh55CGBefkc82HsImW1x4245SxzBOA98P0jg8ji3tdlHhLJcipzqpHjMsoiqpT7I9X67n/XoQ8Cv7UeUPP2rdL6NcNvDlTRLhT6NEDnxTLqGcyG4FUhgJZ9kUBfKNhF5ZDvb+PtT4Yqr2ctCplWv40k4TvATd9doFF7VNdPBaTass+xzfBeCvbH9WdKvFdUzbbzHMc6D8LzRb2QhlAgLa+S7VPkvtq25lV3UmUmggi/MeVlWnNnSmjdbG04ZqfcPontV+FbaFF8pjcYY5oFGWw12py2lvS+8V5VVFNuS5GmJAhmUuLcwh1HIK5S2kKc08Y0xajcJVBJ5Kkcd25mIJMelQewUW485dGYY31zPGDOkoN6bgLSC8fb1lhvTKJwhyAZVBpWcLXFpPKBXUDq71WmGngzUmbfp2ra/1d4htR/7CpL+MlxIj6N8glHaiI93K5GyObmVN/6tEVnyvhhgy8a0PQoxPlFLzpUM7XHJT2fYuEbpKF+iU9caQn5FEFbvGGURLijT3rarcYikyda0YfCN1/CCCe/raBwIrEwMkAF6VnviCPrnu8nx3TSaqgulPOksDUd9PRxKFNDLgWVcrNfCl7pBU4TzgWJh9DTGWp9mh7w9ZOqy01nQz9zCzF1f1jfmo530bpue8uCxL2eLCEq0ucbcU00jTaWV9atyN1Egfz5RPmrZ7+tCTJpI3dB4xTZA01VKh/E1ZKb8JSoWxQBrokdLfZH/zNooC6VEWCmunhXHbg1OUhY9iGN102AzGRlMM37cA9TzpITJotgDSRBro9mGesucdoNMNzcbntt17aiYq6bjdIzk1HTe5Vj02RU64yZVB3hxOc6VPh4Zsaz8caBznKg+vkh1ozLExHcLjyuQ1ZdLDSnSLNwXxUeVMQ5EQH1S+0G/y49nZ873AoTTE+YwFdlzkKB6s+ddBXzuWY0/Intrpgtcukm07JbzwZZPkz67YJOKvLhZHoqgcr1PLz16nMgzDMAzDMAzDMMwk/wD11x10Bau8OgAAAABJRU5ErkJggg=="
  },
  message: [
    {text: {type: mongoose.Schema.Types.ObjectId, ref: "Message"}}
  ],
  token: {
    type: String,
  }

}, { timestamps: true })
module.exports = mongoose.model('User', userSchema)

