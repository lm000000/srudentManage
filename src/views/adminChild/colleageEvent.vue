<template>
  <div class="studentNum" v-if="data.length!=0">
    <div class="title">首页 > {{ $route.query.name }}</div>
    <div class="content">
        <tables>
              <td slot="name">标题</td>
              <td slot="password">经历</td>
              <td slot="other1">时间</td>
       
          <tr slot="main" v-for="(item,index) in data" :key="index">
                <td slot="indexs">{{index}}</td>
                <td slot="names">{{item.title}}</td>
                <td slot="passwords">{{item.content}}</td>
                <td slot="other1s">{{item.date}}</td>
                <td slot="actions" class="actions">
                   <el-button type="primary">添加</el-button>
                   <el-button type="success">更新</el-button>
                   <el-button type="danger">删除</el-button>
                </td>
          </tr>
         </tables>
    </div>
  </div>
</template>
<script>
import tables from "@/components/table"
export default {
  mounted() {
    this.$http({
      url: "/experience/colleageEvent",
    }).then((data) => {
      this.data = data.data;
    });
  },
  data() {
    return {
      data:[],
    };
  },
  components:{
    tables
  }
};
</script>
<style scoped lang="less">


</style>