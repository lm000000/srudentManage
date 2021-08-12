let express=require("express")
let router=express.Router()
let dataBase1=require("./dataBase")
let User=dataBase1.User
let StudentNum=dataBase1.StudentNum
let StudentThing=dataBase1.StudentThing
let StudentLocation=dataBase1.StudentLocation
let StudentDiscuss=dataBase1.StudentDiscuss
let HaoStudent=dataBase1.HaoStudent
let Teacher=dataBase1.Teacher
let ColleageEvent=dataBase1.ColleageEvent
let TeacherThing=dataBase1.TeacherThing


router.get("/user",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    User.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})

router.get("/user/add",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    let admin =new User({
        name:req.query.name,
        password:req.query.password
    })
    admin.save((error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})
router.get("/user/remove",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    User.remove({
        "_id":req.query.id.replace(/"/g,"")
    },(error,data)=>{
        if(error){
            console.log(error)
        }else{
           res.send(data)
        }
    })
})

router.get("/user/updata",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    User.findOneAndUpdate({
        "_id":req.query.id.replace(/"/g,"")
    },{
        name:req.query.name,
        password:req.query.password
    },(error,data)=>{
        if(error){
            console.log(error)
        }else{
           res.send(data)
        }
    })
})

router.get("/shouye/StudentNum",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    StudentNum.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})

router.get("/shouye/StudentLocation",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    StudentLocation.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})

router.get("/shouye/StudentDiscuss",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    StudentDiscuss.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})

router.get("/experience/colleageEvent",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    ColleageEvent.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})
router.get("/teacher/studentThing",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    StudentThing.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})
router.get("/teacher/teacherThing",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    TeacherThing.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})
router.get("/teacher/teacher",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    Teacher.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})
router.get("/excellent/haoStudent",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    HaoStudent.find((error,data)=>{ 
        if(error){
            console.log(error)
        }else{
            res.send(data)
        }
    })
})
module.exports=router