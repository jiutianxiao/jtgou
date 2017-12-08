<template>
  <div class="assembly">

  </div>
</template>

<script>
  export default {
    name: 'assembly',
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
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__indicator {
    width: 10px;
    height: 10px;
  }
  .el-carousel__button{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>
