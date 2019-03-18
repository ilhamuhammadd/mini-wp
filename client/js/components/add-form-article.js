Vue.component('add-form-article', {
    data() {
        return {
            title: '',
            content: '',
            status: '',
            imageUrl: '',
            formData: '',
            article: []
        }
    },
    components: {
        wysiwyg: vueWysiwyg.default.component
    },
    methods: {
        postAnArticle() {
            let formData = new FormData()
            formData.append('title', this.title)
            formData.append('content', this.content)
            formData.append('status', this.status)
            formData.append('imageUrl', this.imageUrl)

            axios
                .post(`${url}/mini-wp/article/create`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        token: localStorage.getItem('token')
                    }
                })
                .then(article=>{

                    this.title = '',
                    this.content = '',
                    this.status = '',
                    this.imageUrl= ''
                    Swal.fire({
                        position: 'top-end',
                        type: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    console.log(article)
                })
                .catch(err=>{
                    console.log(err)
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'You have to fill this form!',
                        footer: '<a href>Wanna try again?</a>'
                      })
                })
        },
        handleFileUpload(event) {
            console.log("masuk file upload", this.$refs.imageUrl)
            this.imageUrl = this.$refs.imageUrl.files[0]
            console.log(this.imageUrl)

        }
    },
    template: `
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <form v-on:submit.prevent="postAnArticle">                            
                        <fieldset>
                            <input type="text" name="title" id="title" v-model="title" placeholder="title" class="form-control">
                            <wysiwyg v-model="content" />
                            <input type="radio" name="status" id="status" value="true" class="form-control" v-model="status"> Public 
                            <input type="radio" name="status" id="status" value="false" class="form-control" v-model="status"> Private <br>
                            <div class="form-group mx-auto" style="width: 50%">
                            <label for="exampleInputFile">Upload Your Image Here</label>
                            <input type="file" id="file" class="inputFile" ref="imageUrl" v-on:change="handleFileUpload" required/>
                            <button type="submit" class="btn btn-primary">Post Article</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    `
})