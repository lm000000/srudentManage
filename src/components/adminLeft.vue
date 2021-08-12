<template>
  <div class="adminLeft">
    <div class="top"></div>

<el-row class="tac">
    <el-col >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-submenu  v-for="(item,index) in arr" :key="index" :index="index+''">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group >
         <el-menu-item  v-for="(item1,index1) in item.child" :key="index1" :index="item1">
           <router-link :to="{path:'/admin/'+index+'-'+index1, query:{name:item1} }" tag="span"><i class="el-icon-menu"></i> {{item1}}</router-link>
         </el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
      </el-menu>
  </el-col>
</el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { name: "登录页面", icon: "el-icon-user-solid",child:["用户列表"] },
        { name: "学生首页", icon: "el-icon-s-platform", child:["学生人数","学生评论","学生来源"]},
        { name: "学生活动", icon: "el-icon-baseball", child:["校园活动"]},
        { name: "优秀学生", icon: "el-icon-picture", child:["学生信息"]},
        { name: "教务日志", icon: "el-icon-s-home", child:["教务日志","教师信息","事件处理"]},
      ],
      index2:["1-0","1-1","1-2","1-3","1-4","1-5","1-6","1-7","1-8"]
    };
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style scoped lang="less">
.adminLeft {
  width: 10%;
  height: 92%;
  background: #333744;
  .top {
    width: 100%;
    height: 20px;
    background-color: #4a5064;
  }
  .el-menu-item{
    span{
      display: inline-block;
      width:100%;
      height: 100%; 
    }
  }
  }
</style>