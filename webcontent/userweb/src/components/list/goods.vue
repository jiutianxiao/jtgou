<template>
  <div class="assembly">
    <ul>
      <li v-for="index in data">
        <div class="dic_img"><img :src="index.img_src" alt=""></div>
        <div class="dic_con">
          <p class="dic_con_title">{{index.name}}</p>
          <p class="price"><span class="o_price">{{index.o_price}}</span><span>{{index.price}}</span></p>
          <p>{{index.shop}}</p>
          <p> {{index.distance}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'assembly',
    data () {
      return {
        data: [{
          item_id: "1234678913124564",
          img_src: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3001304778,4021565056&fm=96",
          name: "坑的几111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
          details: "我是藐视",
          price: "￥12",
          o_price: "￥13",
          distance: "1M",
          shop: "华联"
        }]
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
  li {
    height: 1.5rem;
    border-bottom: 1px solid #d7d7d7;
  }

  p {
    padding-bottom: .1rem;
    text-overflow: ellipsis;
    word-break: keep-all;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .dic_img {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
  }

  .dic_con {
    display: inline-block;
    height: 1.5rem;
    width: 5.6rem;
  }

  .dic_con_title {
    height: .5rem;
    font-size: .28rem;
    color: #232326;
  }

  .price {
    font-size: .28rem;
    color: red;
  }

  .o_price {
    text-decoration: line-through;
    color: #d7d7d7;
    font-size: .26rem;
  }
</style>
