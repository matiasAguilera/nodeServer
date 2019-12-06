const express=require('express');
const router=express.Router();
const modelo=require('../controllers/api.controllers');
router.post('/',modelo.createVMR);
router.get('/',modelo.getVMR);
module.exports=router;