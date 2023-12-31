import axios from 'axios'
const SERVER_PORT=8080;
const POST_ENDPOINT=`http://localhost:${SERVER_PORT}/post`
const userService={

    addPost:(post)=>axios.create({
        baseURL: POST_ENDPOINT,
        timeout: 5000,
    }).post('/add',post),

    updatePost:(id,post)=>axios.create({
        baseURL: POST_ENDPOINT,
        timeout: 5000,
    }).put(`/update/${id}`,post),

    deletePost:(id)=>axios.create({
        baseURL: POST_ENDPOINT,
        timeout: 5000,
    }).delete(`delete/${id}`),


}

export default userService;