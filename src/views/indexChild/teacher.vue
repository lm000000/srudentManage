<template>
  <div class="teacher">
    <div class="left">
     <table>
       <tr>
         <td colspan="2">教务日志</td>
       </tr>
        <tr>
         <td><span class="td1" v-for="(item,index) in contentLeft" :key="index">{{item}}</span></td>
         <td><span class="td1" v-for="(item,index) in contentRight" :key="index">{{item}}</span></td>
       </tr>
     </table>
    </div>
    <div class="right">
      <div class="title">教师信息</div>
      <div class="first" v-for="(item,index) in teacher" :key="index">
        <span>姓名:{{item.name}}</span>
        <span>职位:{{item.job}}</span>
        <span>电话:{{item.phone}}</span>
        <span>办公室:{{item.location}}</span>
      </div>
      
    </div>
    <div class="bottom">
      <index :dataYear="dataYear" :dataFinish="dataFinish" :dataNotFinish="dataNotFinish"></index>
    </div>
  </div>
</template>

<script>
import index from "./echarts/tearcherEcharts"
export default {
  mounted(){
    this.$http({
      url:"teacher/studentThing"
    })
    .then(data=>{
      for(let i of data.data){
      this.dataYear.push(i.year)
      this.dataFinish.push(i.finish)
      this.dataNotFinish.push(i.notFinish)
      }
    })

    this.$http({
      url:"teacher/teacherThing"
    })
    .then(data=>{
      for(let i of data.data){
      this.contentLeft.push(i.contentLeft)
      this.contentRight.push(i.contentRight)
      }
    })
    this.$http({
      url:"teacher/teacher"
    })
    .then(data=>{
     this.teacher=data.data
     console.log(this.teacher)
    })
  },

  data(){
    return{
      dataYear:[],
      dataFinish:[],
      dataNotFinish:[],
      contentLeft:[],
      contentRight:[],
      teacher:[]
    }
  },
   components:{
     index
   }
}
</script>

<style scoped lang="less">
table{
  position: absolute;
  top:100px;
  width:70%;
  border:1px solid whitesmoke;
  border-radius: 5%;
  color:whitesmoke;
}
td{
  height:50px;
  text-align: center;
}
.td1{
  width:300px;
  height:50px;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
}

.right{
  position: absolute;
  width: 350px;
  border: 5px solid #494e8f;
  border-radius: 5%;
  height:800px;
  right:20px;
  top:100px;
   .title{
      height:25px;
      width:100%;
      background-color: #494e8f;
      color:aliceblue;
      text-align: center;
    }
  .first{
    width:330px;
    height:200px;
    margin:0 10px;
    border:1px solid white;
    border-radius: 5%;
    color:white;
    margin-top: 40px;
   
    span{
      margin-left: 20px;
      display: block;
      height:50px;
      line-height: 50px;
    
    }
  }
}
.bottom{
   width:900px;
    height:300px;
    position:absolute;
    top:700px;
}
</style>