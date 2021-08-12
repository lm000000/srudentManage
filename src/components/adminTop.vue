<template>
  <div class="adminTop">
      <div class="adminTopLeft">
        学生管理后台系统 
      </div>
      <div class="adminTopRight">
        <el-button type="primary" @click="click">退出</el-button>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
   click(){
     this.$router.push("/")
   }
  }
}
</script>

<style scoped lang="less">
.adminTop{
  width:100%;
  height:80px;
  background-color:#373d41;
  line-height: 80px;
  position: relative;
  .adminTopLeft{
    font-size: 36px;
    margin-left: 50px;
    color:white
  }
  .adminTopRight{
    position: absolute;
    right:50px;
    top:0
  }
}

</style>