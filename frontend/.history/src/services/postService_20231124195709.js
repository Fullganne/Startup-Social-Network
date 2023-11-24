import axios from "axios";
const SERVER_PORT = 8080;
const POST_ENDPOINT = `http://localhost:${SERVER_PORT}/post`;
const postService = {
    addPost: (post) =>
        axios
            .create({
                baseURL: POST_ENDPOINT,
                timeout: 5000,
            })
            .post("/add", post),

    updatePost: (id, post) =>
        axios
            .create({
                baseURL: POST_ENDPOINT,
                timeout: 5000,
            })
            .put(`/update/${id}`, post),

    deletePost: (id) =>
        axios
            .create({
                baseURL: POST_ENDPOINT,
                timeout: 5000,
            })
            .delete(`delete/${id}`),

    getPostOfUser: (id) =>
        axios
            .create({
                baseURL: POST_ENDPOINT,
                timeout: 5000,
            })
            .get(`/list/${id}`),

    likePost: (id_post, id_user) =>
        axios
            .create({
                baseURL: POST_ENDPOINT,
                timeout: 5000,
            })
            .post(`/like?id_post=${id_post}&userId=${id_user}`),

    dislikePost: (id_post, id_user) =>
        axios
            .create({
                baseURL: POST_ENDPOINT,
                timeout: 5000,
            })
            .post(`/dislike?id_post=${id_post}&userId=${id_user}`),
};

export default postService;
