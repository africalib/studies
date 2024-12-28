<script setup>
import formService from '@/services/formService';
import { reactive } from 'vue';

const state = reactive({
  forms: [],
});

(async () => {
  state.forms = await formService.readAll();
})();
</script>

<template>
  <div class="home">
    <ul>
      <li v-for="f in state.forms" :key="f.id">
        <router-link :to="`/forms/${f.id}`">
          <div class="title">{{ f.title }}</div>
          <div class="desc">{{ f.description }}</div>
          <div class="date">생성일시: {{ f.createDate }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.home {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      border: 1px solid #ddd;

      a {
        display: block;
        padding: 15px;
        text-decoration: none;
        color: inherit;

        .title {
          font-weight: bold;
        }

        &:hover {
          background: #f7f7f7;
        }
      }
    }
  }
}
</style>