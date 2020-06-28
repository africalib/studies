Vue.component('num-btn', {
    template: '<button v-on:click="number++">{{ number }}</button>',
    props: ['number'],
    data: function () {
        return {}
    }
});

Vue.component('anchor', {
    template: '<span v-on:click="go()">{{ text }}</span>',
    props: ['text', 'href', 'openNew'],
    data: function () {
        return {}
    },
    methods: {
        go: function () {
            if (this.href) {
                if (this.openNew === 'true') { // 'false'
                    window.open(this.href, '');
                }
                else {
                    location.href = this.href;
                }
            }
        }
    }
});

//1000 -> 1,000
Vue.component('num-input', {
    template: '<input type="text" v-model="number" v-on:keypress="keypress($event)" v-on:keyup="keyup()" />',
    props: ['value'],
    data: function () {
        return {
            number: null
        }
    },
    methods: {
        keypress: function (e) {
            if(e && e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57)) {
                e.preventDefault();
            }
        },
        keyup: function(){
            var value = this.number;

            if(value) {
                value = value.toString().split(',').join('');
                this.number = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            //this.value = this.number;
            this.$emit('update:value', value);
        }
    },
    created: function() {
        this.number = this.value;
    }
});

new Vue({
    el: '#app',
    data: {
        number: null
    }
});