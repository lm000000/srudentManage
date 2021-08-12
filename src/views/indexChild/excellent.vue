<template>
  <div class="excellent">
    <div class="box">
    </div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="light" v-for="(item,index) in data" :key="index">
      <img :src="require(`@/assets/img/excellent/${item.img}`)">
      <div class="name">{{item.name}}</div>
      <div class="experience">获奖事迹:{{item.experience}}</div>
    </div>
    <div class="circle">
      <div class="one" @click="oneClick(1)">{{name[0]}}</div>
      <div class="two" @click="twoClick(2)">{{name[1]}}</div>
      <div class="three" @click="threeClick(3)">{{name[2]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$http({
      url:"excellent/haoStudent"
    })
    .then(data=>{
        this.data=data.data
        for(let i of data.data){
          this.name.push(i.name)
        }
    })

  /* 这里出现一个没有疑惑  就是在mounted直接改变第一个light的透明度不行 在其他地方就可以*/
    setTimeout(()=>{
      this.flag=1
    },300)
  },
  /* 使第一个信息可以出现 */  
  watch:{
      flag(newVal,oldVal){
        /* 用flag1来记录  当flag值变化时这个只会执行一次 */
        if(this.flag1===0){
           document.querySelectorAll('.light')[0].style.opacity=1
           this.flag1=1
        }
      }
  },
  data(){
    return{
      flag:0,
      data:[],
      name:[],
      flag1:0
    }
  },
   methods:{
     oneClick(index){
       this.summary(index)
       document.querySelector('.light').style.opacity=1
     },
     twoClick(index){
         this.summary(index)   
     },
     threeClick(index){
           this.summary(index)
     },
     /* 使球体旋转 */
     summary(index){
       let arr
       this.flag=index
       this.opacity(this.flag)
       if(index===1){
         arr=[".three",".one",".two"]
       }
       if(index===2){
         arr=[".one",".two",".three"]
       }
       if(index===3){
         arr=[".two",".three",".one"]
       }
       /* 位置三 */
        document.querySelector(arr[0]).style.transform="translateZ(-100px)"
        document.querySelector(arr[0]).style.left=900+"px"
        document.querySelector(arr[0]).style.top=300+"px"
          /* 位置一 */
        document.querySelector(arr[1]).style.transform="translateZ(300px)"
        document.querySelector(arr[1]).style.left=900+"px"
        document.querySelector(arr[1]).style.top=300+"px"
            /* 位置二 */
        document.querySelector(arr[2]).style.transform="translateZ(200px)"
        document.querySelector(arr[2]).style.left=200+"px"
        document.querySelector(arr[2]).style.top=410+"px"
     },
     /* 个人基本信息 */
     opacity(index1){
          for(let i=0;i<3;i++){
            document.querySelectorAll('.light')[i].style.opacity=0
          }
           document.querySelectorAll('.light')[index1-1].style.opacity=1
     },
   }
}
</script>

<style scoped lang="less">
.excellent{
  position: relative;
}
.box{  
   top:700px;
   left: 50px;
   perspective: 800px;
  transform-style: preserve-3d;
  position: absolute;
  width:1200px;
  height: 200px;
  background-color: #235f6d;
  border:1px solid black;
  transform: rotateX(45deg);
  border-radius: 50%;
}
.box::after{
  content: "";
  display:inline-block;
  width:1200px;
  height:200px;
  position: relative;
  top:50%;
  background-color:#235f6d ;
  border-left: 0.5px solid black;
  border-right: 0.5px solid black;
  border-bottom: 0.5px solid black;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  opacity: 0.6;
}
.box2{
    left:220px;
  top:650px;
   perspective: 800px;
  transform-style: preserve-3d;
  position: absolute;
  width:800px;
  height:200px;
  background-color: white;
  border:1px solid black;
  transform: rotateX(70deg);
  border-radius: 50%;

}
.box2::after{
  content:"";
  display: inline-block;
  width:800px;
  height:280px;
  position: relative;
  top:50%;
  background-color:white ;
  border-left: 0.5px solid black;
  border-right: 0.5px solid black;
  border-bottom: 0.5px solid black;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
   opacity: 0.6;
}
.box3{
  left:350px;
  top:570px;
   perspective: 800px;
  transform-style: preserve-3d;
  position: absolute;
  width:500px;
  height:200px;
  background-color: #3ceaff;
  border:1px solid black;
  transform: rotateX(70deg);
  border-radius: 50%;

}
.box3::after{
  content:"";
  display: inline-block;
  width:500px;
  height:280px;
  position: relative;
  top:50%;
  background-color:#3ceaff ;
  border-left: 0.5px solid black;
  border-right: 0.5px solid black;
  border-bottom: 0.5px solid black;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
   opacity: 0.6;
}

.light{
  width:250px;
  position: absolute;
  height: 400px;
  left: 430px;
  top:100px;
  padding:50px;
  word-break: break-all;
  transition: all 3s;
  text-align:center;
  color:white;
  opacity:0;
  img{
    width:150px;
    height:150px;
    margin-bottom: 20px;
  }
  .name{
     font-size: 36px;
     margin-bottom: 20px;
  }
}


.circle{
   perspective: 800px;
   transform-style: preserve-3d;
   .one{
     position: absolute;
     left: 900px;   
     top:300px;
     width:100px;
     height:100px;
     border-radius: 50%;
     background-color: #9c26b0;
     transform:translateZ(300px);
     text-align: center;
     line-height: 100px;
      transition: all 3s;
   }
   .two{
     position: absolute;
     width:100px;
     height:100px;
     left:200px;
     top:410px;
     border-radius: 50%;
     background-color:#0081ff;
     transform:translateZ(200px);
      transition: all 3s;
       text-align: center;
     line-height: 100px;
   }
   .three{
     position: absolute;
     left: 900px;
     top:300px;
     width:100px;
     height:100px;
     border-radius: 50%;
     background-color: #fbbd08;
     transform: translateZ(-100px);
     transition: all 3s;
      text-align: center;
     line-height: 100px;
   }
}  
</style>