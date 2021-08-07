<template>
     <div class="index">
          <tabbar/>
       <div class="router"><router-view></router-view></div>
       <!-- 音频 -->
       <div class="audio">
            <img src="@/assets/img/musicon.gif" alt="" @click="onClick">
            <img src="@/assets/img/musicoff.gif" alt="" @click="offClick">
            <audio src="@/assets/audio/music.mp3"> </audio>
       </div>
       <!-- 退出按钮 -->
       <div class="button">
            <el-dropdown trigger="click">
                 <el-button type="danger" class="el-icon-setting" circle></el-button>
                 <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>退出</el-dropdown-item>
                 </el-dropdown-menu>
            </el-dropdown>
       </div>
     </div>
</template>
<script>
import tabbar from "../components/tabbar"

export default {
 components:{
      tabbar
 },
 methods:{
      onClick(){
           document.querySelector('audio').play()
      },
      offClick(){
           document.querySelector('audio').pause()
      }
 }
}
</script>
<style scoped lang="less">
.index{
     width: 100%;
     height: 100%;
     background-image: url("../assets/img/background.jpg"); 
     background-repeat: no-repeat;
     background-size: 100%;
}
.router{
     position:absolute;
     top:0;
    left: 32%;
    width:68%
}
.audio{
     position: absolute;
     top:0;
}
.audio{
     img{
          width:40px;
          height:40px;
          margin-right:20px;
     }
}
.button{
     position: absolute;
     top:5px;
     right:5px;
}
</style>