Vue.component('num-btn', {
    template: '<button v-on:click="number++">{{ number }}</button>',
    data: function() {
        return {
            number: 0
        }
    }
});

new Vue({
    el: '#app'
});