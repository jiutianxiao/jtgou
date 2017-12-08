<template>
  <div class="BottomButton">
    <p>
      <el-button class="button-bg">注册</el-button>
      <el-button class="button-bg">登陆</el-button>
      <el-button class="button-bg">商家入驻</el-button>
      <el-button class="button-bg">意见反馈</el-button>
    </p>
    <p>
      Copyright © 2004-2017 jtGou 版权所有
    </p>
  </div>
</template>

<script>
  export default {
    name: 'BottomButton',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        location: "北京市",
        value: null
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
  .BottomButton {
    padding: .1rem 0;
    text-align: center;
    border-bottom: 1px solid #D7D7D7;
  }

  .button-bg {
    background: #F6F6F6;
  }

  p {
    padding: .1rem;
  }
</style>
