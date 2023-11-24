import axios from 'axios'
const SERVER_PORT=8080;
const USER_ENDPOINT=`http://localhost:${SERVER_PORT}/user`
const userService={
    loginUser: (user) => axios.create({
        baseURL: USER_ENDPOINT,
        timeout: 5000,
    }).post(`/login`,user),

    signupUser:(user)=> axios.create({
        baseURL: USER_ENDPOINT,
        timeout: 5000,
    }).post('/signup',user),

    getById:(id)=>axios.create({
        baseURL: USER_ENDPOINT,
        timeout: 5000,
    }).get(`/${id}`),

    updateById:(id,user)=>axios.create({
        baseURL: USER_ENDPOINT,
        timeout: 5000,
    }).put(`/update/${id}`,user),

    getUserNotId:(id)=>axios.create({
        baseURL: USER_ENDPOINT,
        timeout: 5000,
    }).get(`/notid/${id}`),

    getUserByEmail:(email)=>axios.create({
        baseURL: USER_ENDPOINT,
        timeout: 5000,
    }).get(`getbyemail/${email}`)
    
}

export default userService;