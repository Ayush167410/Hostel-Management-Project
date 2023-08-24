const express = require('express')
const router = express.Router();
const User = require('../models/registration');
const { body, validationResult } = require('express-validator');

router.post('/createuser',[
    body('email','Invalid Email').isEmail(),
    body('name','Short name').isLength({min:5}),
    body('password','Short Password').isLength({min:5})
]
,async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        await User.create({
            designation:req.body.designation,
            name : req.body.name,
            email :req.body.email,
            password : req.body.password
        })
        res.json({success:true});
        console.log("created");
    }
    catch(error){
        console.log(error);
        alert(error)
        console.log("error happened");
        res.json({success:false});
    }
})
module.exports = router;