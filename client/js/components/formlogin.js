Vue.component('login', {
    data() {
        return {
            email: '',
            password: '',
            token: ''
        }
    },
    methods: {
        dologin(){
            let obj = {
                email: this.email,
                password: this.password
            }

            axios
                .post(`${url}/user/signin`, obj)
                .then(user=>{
                    this.email = '',
                    this.password = ''
                    localStorage.setItem('token', user.data.token)
                    console.log(user.data.token)
                    
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    console.log(user)
                    this.$emit('form-login', user.data.token)
                    console.log(this.$emit)
                })
                .catch(err=>{
                    console.log(err)
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Email/Username is Already Taken!',
                        footer: '<a href>Wanna try again?</a>'
                      })
                })
        }
    },
    template: `
    <div>
                <form @submit.prevent="dologin"  >
                    <fieldset >
                        <div class="form-group">
                            <input class="form-control" type="email" name="email" id="email" v-model="email" placeholder="Type your email" autocomplete="off" required>
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" name="password" id="password" v-model="password" placeholder="Type your password" autocomplete="off" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </fieldset>
                </form>
        
    </div>
    `
})