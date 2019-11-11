var app = new Vue({
    el: '#app',
    data: {
        mode: 'list',
        memo: {
            id: null,
            content: null,
            regDate: null
        },
        memos: []
    },
    methods: {
        renew: function(val){
            return JSON.parse(JSON.stringify(val));
        },
        open: function(id) {
            for(var i in this.memos){
                if(this.memos[i].id === id) {
                    this.memo = this.renew(this.memos[i]);
                    break;
                }
            }
            this.mode = 'edit';
        },
        write: function() {
            this.mode = 'write';
            this.memo = {
                id: null,
                content: null,
                regDate: null
            };
        },
        save: function() {
            var id = this.memos.length + 1;

            if(this.mode === 'write') {
                this.memos.push({
                    id: id,
                    content: this.memo.content,
                    regDate: new Date()
                });
            }
            else if(this.mode === 'edit') {
                for(var i in this.memos) {
                    if(this.memos[i].id === this.memo.id) {
                        this.memos[i] = this.renew(this.memo);
                        break;
                    }
                }
            }

            this.mode = 'list';
            localStorage.setItem('memos', JSON.stringify(this.memos));
        },
        remove: function() {
            if(confirm('삭제하시겠습니까?')) {
                for(var i in this.memos) {
                    if(this.memos[i].id === this.memo.id) {
                        this.memos.splice(i, 1);
                        break;
                    }
                }

                this.mode = 'list';
                localStorage.setItem('memos', JSON.stringify(this.memos));
            }
        }
    },
    created: function() {
        var memos = localStorage.getItem('memos');
        if(memos) {
            this.memos = JSON.parse(memos);
        }
    }
});