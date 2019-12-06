const express=require('express');
const router=express.Router();
const modelo=require('../controllers/api.controllers');
router.get('/',modelo.getAcronimo);
router.post('/',modelo.createAconimo);
module.exports=router;