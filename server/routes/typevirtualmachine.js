const express=require('express');
const router=express.Router();
const modelo=require('../controllers/api.controllers');
router.get('/',modelo.getTypevirtualmachine);
module.exports=router;