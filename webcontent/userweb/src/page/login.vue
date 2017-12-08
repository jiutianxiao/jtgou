<template>
  <div class="login">
    <img src="../common/iocn.png" class="icon">
    <el-radio-group v-model="loginRadio">
      <el-radio-button label="1">账号密码登录</el-radio-button>
      <el-radio-button label="2">短信登录</el-radio-button>
    </el-radio-group>
    <div class="from">
      <div v-if="loginRadio==='1'">
        <el-input class="mt-10" clearable placeholder="请输入账号"></el-input>
        <el-input class="mt-10" clearable type="password" placeholder="请输入密码"></el-input>
      </div>
      <div v-if="loginRadio==='2'">
        <el-input class="mt-10" clearable placeholder="请输入手机号"></el-input>
        <el-input class="mt-10" clearable placeholder="请输入内容">
          <template slot="append">获取验证码</template>
        </el-input>
      </div>
      <p class="forget">
        <router-link to="#">忘记密码</router-link>
      </p>
    </div>
    <div class="login-other">
      <p>——————其他方式登录——————</p>
      <p><i></i><i></i><i></i></p>
    </div>
  </div>
</template>
<!--登录-->
<script>
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";

  export default {
    components: {
      ElButton,
      ElForm
    },
    name: 'login',
    data () {
      return {
        value: null,
        loginRadio: "1"
      }
    },
    methods: {
      click(e){

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .forget {
    padding-top:.1rem ;
  }

  .icon {
    display: block;
    margin: 1rem auto;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  .mt-10 {
    margin-top: .1rem;
  }

  .el-input__inner {
    border: 0;
  }

  .login {
    text-align: center;
  }

  .login-other {
    margin-top: .5rem;
    text-align: center;
  }

  .from {
    margin: .1rem auto;
    width: 6rem;
  }

  .el-input__inner {
    border: 0;
    border-bottom: 1px solid #F6F6F6;
  }

  i {
    display: inline-block;
    /*background: url("../common/login-othen.jpg") no-repeat;*/
    width: .5rem;
    height: .5rem;
    background: red;
    margin: .2rem .2rem;
  }
</style>
