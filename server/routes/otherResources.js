const express=require('express');
const router=express.Router();
const modelo=require('../controllers/api.controllers');
router.get('/',modelo.getOtherResource);
router.post('/',modelo.createOtherResource);
module.exports=router;