<template>
  <div class="">
    <h2><span class="el-icon-arrow-left"></span><span>JT购注册</span></h2>
    <div class="register">
      <el-input placeholder="请输入账户昵称"></el-input>
      <div>
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="+86" value="1"></el-option>
          </el-select>
          <template slot="append">获取验证码</template>
        </el-input>
      </div>
      <el-input placeholder="请输入账户密码"></el-input>
      <el-input placeholder="请确认账户密码"></el-input>
      <el-input placeholder="请输入短信验证码"></el-input>
      <el-button class="mt-100">确认注册</el-button>
    </div>
  </div>
</template>
<!--注册-->
<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";

  export default {
    components: {
      ElButton
    },
    name: 'login',
    data () {
      return {
        input5: "",
        select: "1"
      }
    },
    methods: {
      click(e){

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->1
<style>
  .register .el-select {
    width: 1.8rem;
  }

  .register .el-input__inner, .register .el-input-group__prepend, .register .el-input-group__append {
    border: 0;
    border-bottom: 1px solid #d8dce5;
    border-radius: 0;
    background: #F6F6F6;
  }

  .register .el-button {
    width: 100%;
  }

  .register .input-with-select {
    background-color: #F6F6F6;
  }
</style>

<style scoped>
  .el-icon-arrow-left {
    text-align: left;
    margin-right: .1rem;
  }

  h2 {
    background: white;

    padding: .4rem;
    color: #616161;
  }

  .mt-100 {
    margin-top: 1rem;
  }

  .register {
    margin: 0 auto;
    width: 7.2rem;
  }
</style>
