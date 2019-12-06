const ENVIRONMEN=require('../models/ENVIRONMENT');
const GEOGRAPHICALREGION=require('../models/GEOGRAPHICALREGION');
const OS=require('../models/OS');
const PURPOSE=require('../models/PURPOSE');
const RULES=require('../models/RULES');
const TYPEOFRESOURCE=require('../models/TYPEOFRESOURCE');
const TYPEOFVIRTUALMACHINE=require('../models/TYPEOFVIRTUALMACHINE');
const NAMINGCONVENTIONS=require('../models/NAMINGCONVENTIONS');
const LISTENTITIES=require('../models/LISTENTITIES')
const listApp=require('../models/ListApp');
const vrms=require('../models/virtualmachinesassociatedresources');
const acro=require('../models/acronimos');
const resource=require('../models/recursos');
const otherResource=require('../models/otherResourcesAsociated');
const Names={};


Names.getENVIRONMEN= async (req,res)=>{
    const enviroments = await ENVIRONMEN.find();
    console.log(enviroments);
    res.json(enviroments);
}
Names.getGEOGRAPHICALREGION= async (req,res)=>{
    const GEOGRAPHICALREGIONs= await GEOGRAPHICALREGION.find();
    res.json(GEOGRAPHICALREGIONs);
}
Names.getNAMINGCONVENTIONS=async(req,res)=>{
    const NAMINGCONVENTIONSs=await NAMINGCONVENTIONS.find();
    res.json(NAMINGCONVENTIONSs);
}
Names.getOS=async(req,res)=>{
    const OSs=await OS.find();
    res.json(OSs);
}
Names.getPurpose=async(req,res)=>{
    const purposeS= await PURPOSE.find();
    res.json(purposeS);
}
Names.getTypeofresource=async(req,res)=>{
    const typeofresources=await TYPEOFRESOURCE.find();
    res.json(typeofresources);
}
Names.getTypevirtualmachine=async(req,res)=>{
    const typevirtualmachines=await TYPEOFVIRTUALMACHINE.find();
    res.json(typevirtualmachines);
}
Names.getRules=async(req,res)=>{
    const rules=await RULES.find();
    res.json(rules);
}
Names.getListEntities=async(req,res)=>{
    const List=await LISTENTITIES.find();
    res.json(List);
}
//lista de apps
//VM
Names.CreateListApp=async(req,res)=>{
    const list=new listApp(req.body);
    await list.save();
    res.json(list);
}
Names.getListApp=async (req,res)=>{
    const list=await listApp.find();
    res.json(list);
}
Names.deleteApp=async(req,res)=>{
    const list=await listApp.findByIdAndRemove(req.params.id);
    res.json({'status':'app eliminada'});
}

Names.createVMR=async(req,res)=>{
    const VMR= new vrms(req.body);
    await VMR.save();
    res.json(VMR);
}
Names.getVMR=async(req,res)=>{
    const vmr= await vrms.find();
    res.json(vmr);
}
//acronimos
Names.getAcronimo=async(req,res)=>{
    const acroni=await acro.find();
    
    res.json(acroni);
}
Names.createAconimo=async(req,res)=>{
    const acroni=new acro(req.body);
    await acroni.save();
    res.json(acroni);
}

//resource
Names.createResource=async(req,res)=>{
    const recurso=new resource(req.body);
    await recurso.save();
    res.json(recurso);
}
Names.getResource=async(req,res)=>{
    const recurso=await resource.find();
    res.json(recurso);
}
Names.deleteResource=async(req,res)=>{
    const recurso=await resource.findByIdAndDelete(req.params.id);
    res.json('recurso borrado');
};

//otherResources
Names.createOtherResource=async(req,res)=>{
    const oth=new otherResource(req.body);
    await oth.save();
    res.json(oth);
}
Names.getOtherResource=async(req,res)=>{
    const oth=await otherResource.find();
    res.json(oth);
}
module.exports=Names;