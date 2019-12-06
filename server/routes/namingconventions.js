const express=require('express');
const router=express.Router();
const modelos=require('../controllers/api.controllers');
router.get('/',modelos.getNAMINGCONVENTIONS);
module.exports=router;
