let express=require("express")
let app=express()
let router=require("./router")


app.engine("html",require("express-art-template"))
app.set("views","./public/")

app.use(router)

app.use("/public/",express.static("./public/"))






app.listen("3000",()=>{
 console.log("runing")
})

