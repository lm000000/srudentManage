<template>
  <div class="experience">
    <div class="left">
      <img src="@/assets/img/experience1.jpeg" >
      <img src="@/assets/img/experience2.jpeg" class="img2">
    </div>
      <div class="top">
       <div class="font"><i class="el-icon-s-promotion" style="color:red"></i>青青校园</div>
      </div>
      <div class="right">
        <div class=font>
         <div v-if="this.flag===1">
           <div class="title">{{data2.title}}</div>
           <div class="content">{{data2.content}}</div>
           <div class="date">{{data2.date}}</div>
           </div>
        <div v-else>
          <div class="title">{{data1.title}}</div>
           <div class="content">{{data1.content}}</div>
           <div class="date">{{data1.date}}</div>
        </div>
        </div>
        </div>
        <div class="bottom">
          <div class="firstFont"><i class="el-icon-office-building" style="color:white"></i>社会实践</div>
          <div class="first"></div>
          <div class="secondFont"><i class="el-icon-cold-drink" style="color:white"></i>艺术活动</div>
          <div class="second"></div>
          <div class="thirdFont"><i class="el-icon-baseball" style="color:white"></i>校园体育</div>
          <div class="third"></div>
        </div>
  </div>
</template>

<script>
export default {
  mounted(){
    setInterval(()=>{           
      if(this.flag===1){
        document.querySelectorAll('img')[0].className=""
      document.querySelectorAll('img')[this.flag].className="img2 class1"
      this.flag=0
      }else{
        document.querySelectorAll('img')[1].className="img2"
        document.querySelectorAll('img')[this.flag].className=" class1"
        this.flag=1
      }
    },3000)

    this.$http({
      url:"experience/colleageEvent"
    })
    .then(data=>{
      this.data1=data.data[0]
      this.data2=data.data[1]
    })

  },
  data(){
    return{
      flag:1,
      data1:{},
      data2:{}
    }
  }
}
</script>

<style scoped lang="less">
.experience {
  position: relative;
  height:100%;
  .left {
     width:800px;
     height:450px;
     position: absolute;
     top:100px;
     z-index: 9;
     left: -20px;

    img{
     width:800px;
     height:450px;
     transition: all 2s;
    }
   .img2{
     position: absolute;
     left: 0;
    }
  }

  .top {
     background-color: #eeebea;
     width:700px;
     height:250px;
     position: absolute;
     top:50px;
     right: 50px;
      .font{
        font-size:36px;
        margin:60px 0 0 200px; 
        letter-spacing: 10px;      
      }
  }
  .right {
    background-color:#8c726e;
     width:700px;
     height:450px;
     position: absolute;
     top:250px;
     right:50px;
     .font{
       color:white;
       margin:50px 0 0 170px;
       .title{
         font-size: 30px;
         margin-bottom: 20px;
       }
       .content{
         text-indent: 20px;
         margin-bottom: 30px;
       }
       .date{
          float: right;
          margin-right:30px;
       }
     }
  }
}
.class1{
  opacity: 0;
}
.bottom{
  position: absolute;
  bottom:5px;
  width:100%;
  height: 200px;
  left:-50px;
  .first{
    width:400px;
    height: 200px;
    background-image: url("../../assets/img/experience/practice.jpg");
    background-size: 100%;
    position: absolute;
    border:2px solid #black;
    background-color: black;
    opacity: 0.5;
  }
  .second{
     width:400px;
    height: 200px;
    background-image: url("../../assets/img/experience/art.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    left:470px;
     border:2px solid #black;
    background-color: black;
    opacity: 0.5;
  }
  .third{
     width:400px;
    height: 200px;
    background-image: url("../../assets/img/experience/exercise.jpg");
    background-size: 100%;
    position: absolute;
    left:940px;
     border:2px solid #black;
    background-color: black;
    opacity: 0.5;
  }
  i{
    position: relative;
    display: block;
    left:50px;
  }
  .first:hover,
  .second:hover,
  .third:hover{
    transform: translateY(-10px);
  }
  .firstFont{
    z-index: 9;
    position: absolute;
    font-size:36px;
    color:white;
    left:120px;
    top:60px;
    transition: all 1s;
  }
  .secondFont{
    z-index: 9;
    position: absolute;
    font-size:36px;
    color:white;
    left:590px;
      top:60px;
    transition: all 1s;
  }
  .thirdFont{
   z-index: 9;
    position: absolute;
    font-size:36px;
    color:white;
     left:1060px;
       top:60px;
       transition: all 1s;
  }
}
</style>