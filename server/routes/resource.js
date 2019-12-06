const express=require('express');
const router=express.Router();
const modelo=require('../controllers/api.controllers');
router.post('/',modelo.createResource);
router.get('/',modelo.getResource);
module.exports=router;