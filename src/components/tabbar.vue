<template>
  <div class="tabbar">
        <div class="wai">
            <div class="inner">
          <div class="font" v-for="(item,index) in data" :key="index" @click="fontClick(index)">
            <router-link tag="span" :to="'/index/'+index" class="link">{{item}}</router-link>
          </div>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  mounted(){
      for(let i=0;i<4;i++){
         document.querySelectorAll('.font')[i].className+=" class2"
      }
    document.querySelectorAll('.font')[0].className=" font class1"
  },
  data(){
      return{   
          data:["学生首页","学生活动","优秀学生","教务处"],
          index:Number,
          flag:0,
      }
  },
  methods:{
      fontClick(index){
          document.querySelectorAll('.font')[this.flag].className="font class2"
          this.flag=index
          if(!this.findClass(document.querySelectorAll('.font')[index].className)){
          document.querySelectorAll('.font')[index].className="font"    
          document.querySelectorAll('.font')[index].className+=" class1"
          }
          switch (index){
             case 1:
                 this.index=2.5
                 break;
            case 2:
                this.index=1.5
                break;
            case 3:
                this.index=0.5
                break
          }  
          if(index===0){
              document.querySelector('.inner').style.top="50%"
          }else{
          document.querySelector('.inner').style.top=143*this.index+"px"
          }
      },
    findClass(data){
         let reg=/\bclass1\b/g
          if(reg.test(data)){
                return true
        }
    }
  }
}
</script>

<style scoped lang="less">
.tabbar{
    height:100%;
    width:30%;
}
.wai{
    width:30%;
    height:100%;
    position: absolute;
    .inner{
     font-size: 30px;
     position: absolute;
     width:100%;
     top:50%;
     transform: translateY(-70px);
     transition: all 1s;
     .font{
        text-align: center;
        line-height:120px;
         width:100%;
         height:143px;
         color:white;
         font-family: "微软雅黑";
     }
    }
}
.class1{
      
    }
.class2{
    opacity: 0.4;
}
.link{
    display: block;
    width:100%;
    height:100%
}
</style>