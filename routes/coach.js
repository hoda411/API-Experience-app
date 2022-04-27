const express = require("express");
const router = express.Router();



// Add New Account
router.post('/coach/add-acc', (req,res,next)=>{
    
    res.status(200).json({data:"account Is Added"})
    
});

// Add New Courses
router.post('/coach/add-course', (req,res,next)=>{
    
    res.status(200).json({data:"course Is Added"})
    
});


// All Compliant Of Courses
router.get('/coach/show-comp', (req,res,next)=>{
    
    res.status(200).json({data:"Get-All-Compliant-Of-Courses"})
    
});


// All Rates Of Courses
router.get('/coach/show-rate', (req,res,next)=>{
    
    res.status(200).json({data:"Get-All-Rates-Of-Courses"})
    
});


// Update Course Details
router.put('/coach/update-details', (req,res,next)=>{
    
    res.status(200).json({data:"OK Updated"})
    
});


// Delete  An Existing Course 
router.delete('/coach/delete-course', (req,res,next)=>{
    
    res.status(200).json({data:"OK Deleted"})
    
});
module.exports = router;