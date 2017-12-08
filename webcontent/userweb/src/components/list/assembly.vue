<template>
  <div class="assembly">
    <div class="top_nav_box">
      <ul class="top_nav">
        <li v-for="index in topNav">
          <p>{{index}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'assembly',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        location: "北京市",
        value: null,
        topNav: ["服装0", "服装1", "服装2", "服装3", "服装4", "服装5", "服装6", "服装7", "服装8", "服装9", "服装10", "服装11", "服装12", "服装13", "服装14", "服装15", "服装16", "服装17", "服装18", "服装19",]
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
  div {
  }

  .top_nav_box {
    width: 100%;
    overflow-y: scroll;
  }

  .top_nav {
    width: max-content;
  }

  .top_nav li {
    position: relative;
    display: inline-block;
    height: .8rem;
    line-height: .8rem;
    padding-left: .2rem;
    padding-right: .2rem;
  }

  .top_nav li:after {
    position: absolute;
    height: .2rem;
    top: .3rem;
    left: -1px;
    content: "";
    display: block;
    border-left: 1px solid #D7D7D7;
  }
</style>
