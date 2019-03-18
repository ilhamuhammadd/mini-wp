Vue.component('register',{
    data() {
        return {
            username: '',
            password: '',
            email: '',
            message: ''
        }
    },
    methods: {
        createUser() {
        let obj={
                username:this.username,
                password:this.password,
                email:this.email
        }
            axios
                .post(`${url}/user/signup`, obj)
                .then(user=>{
                    this.username = '',
                    this.password = '',
                    this.email = ''
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    console.log(user)
                })
                .catch(err=>{
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
            
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <form v-on:submit.prevent="createUser" >
                            <fieldset >
                                <div class="form-group">
                                    <input class="form-control" type="text" name="username" id="username" v-model="username" placeholder="Type your username" autocomplete="off" required>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="email" name="email" id="email" v-model="email" placeholder="Type your email" autocomplete="off" required>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="password" name="password" id="password" v-model="password" placeholder="Type your password" autocomplete="off" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>     
            </div>
        
    `
})