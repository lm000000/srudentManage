<template>
     <div class="shouye">
       <img src="@/assets/img/shouye.jpg">
       <div class="pinglun">
        <div class="font">
          学生评论
        </div>
       </div>
    
        <num/>  
         <account/>
     
     </div>    
</template>
<script>
import num from "./echarts/num"
import account from "./echarts/account"
export default {
  components:{
    num,
    account
  }
}
</script>
<style scoped lang="less">
.shouye{
img{
    margin-top:50px;
    width:900px;
    height:500px;
}
.pinglun{
    position: absolute;
    width:400px;
    height:500px;
    top:50px;
    right:50px;
    border:1px solid #041764;
    border-radius:6%; 
    .font{
      background-color: #4b6186;
      border-radius: 10%;
      margin:10px;
      color:white;
      height:25px;
      font-size:18px;
      text-align: center;
    }
}
.num{
   width:900px;
   height:400px;
  border: 1px solid black
}
}
</style>