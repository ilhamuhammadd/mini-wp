// { id: 1,
//     title: "Pilpres",
//     article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sint adipisci at distinctio inventore, ex exercitationem id eos quos. Magni cumque est pariatur nihil sed minus corporis mollitia? Soluta, voluptates?"
//   },
//   { id: 2,
//     title: "Timnas",
//     article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas sint adipisci at distinctio inventore, ex exercitationem id eos quos. Magni cumque est pariatur nihil sed minus corporis mollitia? Soluta, voluptates?"
//   },
//   {
//     id: 3,
//     title: 'All England',
//     article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt exercitationem consequatur totam sint numquam dolorem eveniet accusantium provident sequi!"
//   }


// const app = new Vue({
//     el: "#app",
//     data: {
//         targetid: '',
//         title: '',
//         content: '',
//         created_at: '',
//         articles: []
//     },
//     created() {
//         axios
//             .get('http://localhost:3000/mini-wp/article')
//             .then((response) => {
//                 for (let i = 0; i < response.data.length; i++) {
//                     this.articles.push(response.data[i])
//                 }
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     },
//     methods: {
//         addNewArticle() {
//             // console.log('masuk sini')
//             if (!this.title && !this.content && !this.created_at) {
//                 alert('Input bro')
//             } else {
//                 this.articles.push({
//                     id: this.articles.length + 1,
//                     title: this.title,
//                     content: this.content,
//                     created_at: this.created_at
//                 })

//                 axios
//                     .post('http://localhost:3000/mini-wp/article/create', {
//                         id: this.articles.length + 1,
//                         title: this.title,
//                         content: this.content,
//                         created_at: this.created_at
//                     })
//                     .then(data => {

//                     })
//                     .catch(err => {
//                         console.log(err)
//                     })
//             }
//         },
//         updateArticle() {
//             axios
//                 .put(`http://localhost:3000/mini-wp/article/edit/${this.targetid}`, {
//                     title: this.title,
//                     content: this.content,
//                     created_at: this.created_at
//                 })
//                 .then(data => {
//                     console.log(data)
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         },
//         deleteArticle() {
//             axios.delete(`http://localhost:3000/mini-wp/article/delete/${this.targetid}`)
//                 .then(data => {
//                     console.log(data)
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         }
//     }
// })