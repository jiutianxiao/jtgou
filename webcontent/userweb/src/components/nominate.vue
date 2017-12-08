<template>
  <div class="nominate">
    <h2>
      <slot name="title"></slot>
      <router-link to="a" class="link">更多</router-link>
    </h2>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(o, index) in 3" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
          <div style="padding: .14rem;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <time class="time">店铺</time>
              <!--<el-button type="text" class="button">操作按钮</el-button>-->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<!--首页推荐模块-->
<script>
  export default {
    name: 'nominate',
    data () {
      return {
        currentDate: '50米'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    text-align: center;
    color: #002299;
    padding: .1rem 0;
  }

  .nominate {
    margin: 0 auto;
    width: 7rem;
    padding: .1rem;
    border: 1px solid #D7D7D7;
  }

  .time {
    font-size: .13rem;
    color: #999;
  }

  .bottom {
    margin-top: .13rem;
    line-height: .12rem;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .link {
    float: right;
    font-size: .12rem;
    color: #999;
  }
</style>
