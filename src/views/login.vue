<template>
  <div class="login">
    <div class="login-center">
      <div class="img"><img src="@/assets/logo.png" /></div>
      <div class="loginForm">
        <el-form :model="formData" ref="resetForm" :rules="rules" label-width="80px">
          <el-form-item prop="username">
            <el-input
              v-model="formData.username"
              prefix-icon="el-icon-s-custom"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="formData.password"
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item class="bottom">
            <el-button type="primary" @click="check">登录</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      rules: {
        username: [
        { required: true, message: '用户名', trigger: 'blur' },
         { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
         { required: true, message: '密码', trigger: 'blur' },
         { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    reset() {
      /* 重置 */
      this.$refs.resetForm.resetFields();
    },
    /* 验证成功返回ture 失败返回false */
    check(){
      this.$refs.resetForm.validate(data=>{
        console.log(data)
      })
    }
  }}
  
</script>

<style scoped lang="less">
.login {
  height: 100%;
  background-color: #042e56;
}
.login-center {
  width: 550px;
  height: 380px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.img {
  width: 150px;
  height: 150px;
  border: 1px solid #eee;
  padding: 10px;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: -75px;
  background-color: white;
  img {
    width: 100%;
    height: 100%;
    background-color: #eee;
    border-radius: 50%;
  }
}
.loginForm {
  margin-top: 140px;
  .el-form-item{
    margin-bottom: 30px;
  .el-input {
    display: block;
    width: 85%;
    // margin: 0 auto;
  }}
  .bottom {
    position: absolute;
    right: 70px;
  }
}
</style>



