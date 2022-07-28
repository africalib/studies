<template>
  <div class="order">
    <div class="container">
      <main>
        <div class="py-5 text-center"><h2>주문하기</h2>
          <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form
            group has a validation state that can be triggered by attempting to submit the form without completing
            it.</p></div>
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last"><h4
              class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">구입 목록</span>
            <span
                class="badge bg-primary rounded-pill">3</span></h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm" v-for="(i, idx) in state.items"
                  :key="idx">
                <div>
                  <h6 class="my-0">{{ i.name }}</h6>
                </div>
                <span class="text-muted">
                  {{ lib.getNumberFormatted(i.price - i.price * i.discountPer / 100) }}원
                </span>
              </li>
            </ul>
            <h3 class="text-center total-price">
              {{ lib.getNumberFormatted(computedPrice) }}원
            </h3>
          </div>
          <div class="col-md-7 col-lg-8"><h4 class="mb-3">주문자 정보</h4>
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-12"><label for="username" class="form-label">이름</label>
                  <input type="text"
                         class="form-control"
                         id="username"
                         placeholder="Username"
                         required="">
                </div>
                <div class="col-12"><label for="address" class="form-label">주소</label><input type="text"
                                                                                             class="form-control"
                                                                                             id="address"
                                                                                             placeholder="1234 Main St"
                                                                                             required="">
                </div>
              </div>
              <hr class="my-4">
              <h4 class="mb-3">결제 수단</h4>
              <div class="my-3">
                <div class="form-check"><input id="credit" name="paymentMethod" type="radio" class="form-check-input"
                                               checked="" required=""><label class="form-check-label" for="credit">신용카드
                </label></div>
                <div class="form-check"><input id="debit" name="paymentMethod" type="radio" class="form-check-input"
                                               required=""><label class="form-check-label" for="debit">무통장입금</label>
                </div>
              </div>
              <label for="cc-name" class="form-label">카드 번호</label><input type="text"
                                                                          class="form-control"
                                                                          id="cc-name"
                                                                          placeholder=""
                                                                          required="">
              <hr class="my-4">
              <button class="w-100 btn btn-primary btn-lg" type="submit">결제하기</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import {computed, reactive} from "vue";
import axios from "axios";
import lib from "@/scripts/lib";

export default {
  setup() {
    const state = reactive({
      items: []
    })

    const load = () => {
      axios.get("/api/cart/items").then(({data}) => {
        console.log(data);
        state.items = data;
      })
    };

    const computedPrice = computed(() => {
      let result = 0;

      for (let i of state.items) {
        result += i.price - i.price * i.discountPer / 100;
      }

      return result;
    })

    load();

    return {state, lib, computedPrice}
  }
}
</script>

<style scoped>
</style>