const express=require('express');
const router=express.Router();
const metodos=require('../controllers/api.controllers');
router.get('/',metodos.getGEOGRAPHICALREGION);
module.exports=router;