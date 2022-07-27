<template>
  <div class="cart">
    카트 페이지
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({})

    axios.get("/api/cart/items").then(({data}) => {
      console.log(data);
    })

    return {state}
  }
}
</script>

<style scoped>
</style>