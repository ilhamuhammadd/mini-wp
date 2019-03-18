const url = 'http://localhost:3000'

let app = new Vue({
    el: '#app',
    data() {
        return {
            logged: true,
            registered: true,
            token: localStorage.getItem('token')
        }
    },
    methods: {
        home() {
            if (this.token) {
                this.logged = false
                this.registered = false
            }
        },
        hide() {
            this.logged = true
            this.registered = true
        },
        doinglogin(payload) {
            this.token = payload
        }

    },
    beforeMount() {
        this.home()
    }
})