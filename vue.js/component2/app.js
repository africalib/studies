Vue.component('num-btn', {
    template: '<button v-on:click="number++">{{ number }}</button>',
    props: ['number'],
    data: function() {
        return {}
    }
});

Vue.component('anchor', {
    template: '<span v-on:click="go()">{{ text }}</span>',
    props: ['text', 'href', 'openNew'],
    data: function() {
        return {}
    },
    methods: {
        go: function() {
            if(this.href) {
                if(this.openNew === 'true') { // 'false'
                    window.open(this.href, '');
                }
                else {
                    location.href = this.href;
                }
            }
        }
    }
});

new Vue({
    el: '#app'
});