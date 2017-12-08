<template>
  <div class="list">
    <assembly></assembly>
    <goods></goods>
  </div>
</template>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import assembly from "@/components/list/assembly"
  import goods from "@/components/list/goods"
  export default {
    components: {
      ElButton,
      assembly,
      goods
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .list {
    margin: 0 auto;
    width: 7.2rem;
  }
</style>
