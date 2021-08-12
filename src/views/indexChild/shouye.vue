<template>
     <div class="shouye">
       <img src="@/assets/img/shouye.jpg">
       <div class="pinglun">
        <div class="font">
          学生评论
        </div>
        <div class="content">
          <div class="wai">
           <div class="discuss" v-for="(item,index) in dataDiscuss" :key="index">
             {{item.discuss}}---{{item.name}}
           </div>
          </div>
        </div>
       </div>
        <num :data1="data1Num" :data2="data1Year"></num>  
         <account :data="data2"></account>
     </div>    
</template>
<script>
import num from "./echarts/num"
import account from "./echarts/account"
export default {
  data(){
    return{
      data1Num:[],
      data1Year:[],
      data2:[],
      dataDiscuss:[]
    }
  },
  components:{
    num,
    account
  },
  mounted(){
    this.$http({
      url:"/shouye/StudentNum"
    })
    .then(data=>{
       for(let i of data.data){
         this.data1Num.push(i.num)
         this.data1Year.push(i.year)
       }
    })
    this.$http({
      url:"/shouye/StudentLocation"
    })
    .then(data=>{
       this.data2=data.data
    })
     this.$http({
      url:"/shouye/StudentDiscuss"
    })
    .then(data=>{
       this.dataDiscuss=data.data
    })
   
  },
  methods:{

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
    .content{
        width:100%;
        height: 450px;
        overflow:hidden;
        .wai{
         animation: text 20s linear infinite;
          .discuss{
          height: 80px;
          line-height: 80px;
          text-align: center;
          color:white;
        }
        .discuss:nth-child(2n){
          background-color: #918597;
        }
        .discuss:nth-child(2n-1){
          background-color: #0b7da1;
        }
        }
    }
}
.num{
   width:900px;
   height:400px;
  border: 1px solid black
}
}

@keyframes text {
  from{
   transform: translateY(500px);
  }
  to{
   transform: translateY(-800px);
  }
  
}
</style>