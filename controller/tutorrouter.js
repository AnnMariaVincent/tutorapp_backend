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

module.exports=router
