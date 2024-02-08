const express=require("express")
const tutorModel=require("../model/tutormodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let tutor=new tutorModel(data)
    let result=await tutor.save()
    res.json({
        status:"success"
    })
})
    router.post("/search",async(req,res)=>{
        let input=req.body
        let data=await tutorModel.find(input)
        res.json(data)
    
})

module.exports=router
