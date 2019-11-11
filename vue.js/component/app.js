Vue.component('test-tag1', {
    template: '<div>{{ beta }}</div>',
    data: function() {
        return {
            beta:2
        }
    }
});

Vue.component('test-tag2', {
    template: '<div>aaa</div>'
});

new Vue({
    el: '#app'
});