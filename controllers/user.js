const express = require('express');
const router = require('../routes/route');
const User = require('../models/user');

module.exports.SignUp = await function(req,res){
    try {
     const new_user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirm_password:confirm_password,
        varification_status:varification_status
     })   
     const user =  new_user.save();
     res.status(200).json("Registered Successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    } 
}

module.exports.login = async function(req,res){
    try {
      const user = await  User.findOne({
        email:req.body.email,
      }) 
      if(!user){
        res.status(401).json('User is not found')
      }
      if(password != req.body.password){
        res.status(403).json('wrong password')
      }
      console.log(user);
      res.status(200).json(user)
    } catch (error) {
        if(error){
            console.log(error);
        }
        res.status(500).json(error)
    }
}

module.exports.update = async function(req,res){
  try {
    const user = await  User.findOne({
        email:req.body.email,
      }) 
      if(!user){
        res.status(401).json('User is not found')
      }
      if(password != req.body.password){
        res.status(403).json('wrong password')
      }
    const new_password = req.body.password;
    const update = await User.findbyIdandUpdate(_id,{
        id :user._id
    })
    res.status(200).json(update)
  } catch (error) {
    if(error){
        console.log(error);
    }
    res.status(500).json(error)
  }
}

module.exports.delete = async function(req,res){
    try {
        const user = await  User.findOne({
            email:req.body.email,
          }) 
          if(!user){
            res.status(401).json('User is not found')
          }
          if(password != req.body.password){
            res.status(403).json('wrong password')
          }
      const del = await User.findbyIdandDelete(_id,{
        id:user._id
      })  
      res.status(200).json(del);
    } catch (error) {
        if(error){
            console.log(error);
        }
        res.status(500).json(error)
    }
}