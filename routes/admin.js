const express = require("express");
const router = express.Router();

// Show All Users
router.get('/admin/users', (req,res,next)=>{
    
res.status(200).json({data:"Get-All-Users"})

});

// Show All Courses Details
router.get('/admin/courses/details', (req,res,next)=>{
    
    res.status(200).json({data:"Get-All-Courses-Details"})
    
});

// Add New User 
router.post('/admin/add-user', (req,res,next)=>{
    
    res.status(200).json({data:"User Is Added"})
    
});

// Delete An Existing User
router.delete('/admin/delete-user',(req,res,next)=>{
res.status(200).json({data:"User Is Deleted "})
});
module.exports = router;