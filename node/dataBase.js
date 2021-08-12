let mongoose=require("mongoose")

 mongoose.connect("mongodb://localhost/xueSheng")

 let schema=mongoose.Schema

 let user=new schema({
     name:{
         type:String,
         required:true
     },
     password:{
        type:Number,
     }
 })
let studentNum=new schema({
    year:{
        type:Number
    },
    num:{
        type:Number
    },
    account:{
        type:String
    },
})
let studentThing=new schema({
    year:{
        type:Number
    },
    finish:{
        type:Number
    },
    notFinish:{
        type:Number
    }
})
let studentLocation=new schema({
    name:{
        type:String
    },
    value:{
        type:Number
    }
})
let studentDiscuss=new schema({
    name:{
        type:String
    },
    discuss:{
        type:String
    },
})
let haoStudent=new schema({
    name:{
        type:String
    },
    experience:{
        type:String
    },
    img:{
        type:String
    }
})
let teacher=new schema({
    name:{
        type:String
    },
    phone:{
        type:Number
    },
    job:{
        type:String
    },
    location:{
        type:String
    }
})
let teacherThing=new schema({
    contentLeft:{
        type:String
    },
    contentRight:{
        type:String
    }
})
let colleageEvent=new schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    date:{
        type:String
    }
})

 let User=mongoose.model("User",user)
 let StudentNum=mongoose.model("StudentNum",studentNum)
 let StudentThing=mongoose.model("StudentThing",studentThing)
 let StudentLocation=mongoose.model("StudentLocation",studentLocation)
 let StudentDiscuss=mongoose.model("StudentDiscuss",studentDiscuss)
 let HaoStudent=mongoose.model("HaoStudent",haoStudent)
 let Teacher=mongoose.model("Teacher",teacher)
 let ColleageEvent=mongoose.model("ColleageEvent",colleageEvent)
 let TeacherThing=mongoose.model("TeacherThing",teacherThing)

 exports.User=User
 exports.StudentNum=StudentNum
 exports.StudentThing=StudentThing
 exports.StudentLocation=StudentLocation
 exports.StudentDiscuss=StudentDiscuss
 exports.HaoStudent=HaoStudent
 exports.Teacher=Teacher
 exports.ColleageEvent=ColleageEvent
 exports.TeacherThing=TeacherThing
