const express = require("express");
const router = express.Router();
router.get('/users', (req,res,next)=>{
    
res.status(200).json({data:"hello"})

});
module.exports = router;