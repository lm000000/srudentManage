<template>
  <div class="user">
    <div class="title">首页 > {{ $route.query.name }}</div>
    <div class="content">
      <tables>
        <tr slot="main" v-for="(item, index) in data" :key="index">
          <td slot="indexs">{{ index }}</td>
          <td slot="names">{{ item.name }}</td>
          <td slot="passwords">{{ item.password }}</td>
          <td slot="actions" class="actions">

            <!-- 添加 -->
            <el-button type="primary" @click="dialogFormVisible = true" class="add">添加</el-button>
            <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
              <el-form :model="form1">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                  <el-input v-model="form1.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                  <el-input v-model="form1.password" autocomplete="off"></el-input>
                  <div class="font">密码只能是数字</div>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="success(index)"
                  >确 定</el-button
                >
              </div>
            </el-dialog>

         <!-- 更新 -->
            <el-button type="success" @click="dataShow(index)" class="add">更新</el-button>
               <el-dialog title="更新数据" :visible.sync="dialogFormVisible2">
              <el-form :model="form2">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                  <el-input v-model="form2.name" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                  <el-input v-model="form2.password" autocomplete="off"></el-input>
                  <div class="font2">密码只能是数字</div>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="cancel2">取 消</el-button>
                <el-button type="primary" @click="success2(index,item._id)"
                  >确 定</el-button
                >
              </div>
            </el-dialog>        
            <!-- 删除 -->
            <el-button type="danger" @click="open(item._id,index)">删除</el-button>
          </td>
        </tr>
      </tables>
    </div>
  </div>
</template>
<script>
import tables from "@/components/table";
export default {
  mounted() {
   this.getData()
  },
  data() {
    return {
      data: [],
      form1: {
          name: '',
          password:'',
        },
      form2:{
        name:'',
        password:'',
      } , 
        dialogFormVisible: false,
        dialogFormVisible2: false,
        formLabelWidth: '80px',
        index1:0,
        index2:0
    };
  },
  methods:{
    getData(){
         this.$http({
      url: "/user",
    }).then((data) => {
      this.data = data.data;
    });
    },
    /* 添加  确定时 */
     success(index){
       let reg=/\d/g
       if(reg.test(this.form1.password)){
       this.dialogFormVisible=false
       this.$http({
         url:"/user/add",
         params:{
           name:this.form1.name,
           password:this.form1.password
         }
       })
       .then(data=>{
         this.data.push(data.data)
         this.form1.name=''
         this.form1.password=''
       })
       }else{
         this.index1=index
         document.querySelectorAll('.font')[this.index1].style.opacity=1
       }
     },
     /* 添加取消时 */
     cancel(){
        this.dialogFormVisible=false
        this.form1.name=''
         this.form1.password=''
     },

     /* 更新确定 */
     success2(index,id){
       let reg=/\d/g
       if(reg.test(this.form2.password)){
       this.dialogFormVisible2=false
       this.$http({
         url:"/user/updata",
         params:{
           name:this.form2.name,
           password:this.form2.password,
           id:id
         }
       })
       .then(data=>{
        this.getData()
       })
       }else{
         this.index2=index
         document.querySelectorAll('.font2')[this.index2].style.opacity=1
       }
     },
     cancel2(){
        this.dialogFormVisible2=false
        this.form2.name=''
         this.form2.password=''
        },
     dataShow(index){
       this.dialogFormVisible2=true
       this.form2.name=this.data[index].name
       this.form2.password=this.data[index].password
     },

   /* 删除 */
     open(id,index) {
        this.$confirm('是否删除', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
            url:"/user/remove",
            params:{
              id:id
            }
          })
          .then(data=>{
            if(data){
             this.data.splice(index,1)
            }
          })
        })
      }
  },
  watch:{
    /* 监听密码  使提示消息隐藏 */
    'form1.password':{
      deep:true,
      handler(newVal,oldVal){
        document.querySelectorAll('.font')[this.index1].style.opacity=0
      }
    },
     'form2.password':{
      deep:true,
      handler(newVal,oldVal){
        document.querySelectorAll('.font2')[0].style.opacity=0
      }
    },
  },
    components: {
      tables,
    },
};


</script>
<style scoped lang="less">
.font{
    color:red;
    position: absolute;
    opacity: 0;
}
.font2{
    color:red;
    position: absolute;
    opacity: 0;
}
.add{
  margin-right: 10px;
}
</style>