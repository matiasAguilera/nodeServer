const express=require('express');
const router=express.Router();
const model=require('../controllers/api.controllers');
router.get('/',model.getListApp);
router.post('/',model.CreateListApp);
router.delete('/:id',model.deleteApp);
module.exports=router;