<template>
  <div class="TopSearch dome-input-suffix">
    <div style="height: 40px"></div>
    <el-input class="search"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="value">
      <template slot="append">搜索</template>
    </el-input>
    <el-carousel :interval="4000" trigger="click" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" alt="">
      </el-carousel-item>
    </el-carousel>
    <MiddleNav></MiddleNav>
    <div class="nominate">
      <nominate><span slot="title">--活动推荐--</span></nominate>
    </div>
    <div class="nominate">
      <nominate><span slot="title">--店铺推荐--</span></nominate>
    </div>
    <div class="nominate">
      <nominate><span slot="title">--商品推荐--</span></nominate>
    </div>
    <div class="BottomButton">
      <BottomButton></BottomButton>
    </div>
    <div class="BottomNav">
      <BottomNav></BottomNav>
    </div>
  </div>
</template>

<script>
  import ElCol from "element-ui/packages/col/src/col";
  import MiddleNav from "@/components/MiddleNav";
  import nominate from "@/components/nominate";
  import BottomNav from "@/components/BottomNav";
  import BottomButton from "@/components/BottomButton";
  export default {
    components: {ElCol, MiddleNav, nominate, BottomNav, BottomButton},
    name: 'HelloWorld',
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
  .TopSearch .search {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .TopSearch .el-carousel__indicator {
    width: 10px;
    height: 10px;
  }

  .TopSearch .el-carousel__button {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .TopSearch img {
    width: 100%;
    height: 100%;
  }

  .TopSearch .nominate {
    margin: .2rem 0 0 0;
  }

</style>
