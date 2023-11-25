import axios from "axios";
const SERVER_PORT = 8080;
const USER_ENDPOINT = `http://localhost:${SERVER_PORT}/f`;
const followService = {
    follow: (userId, followedId) =>
        axios
            .create({
                baseURL: USER_ENDPOINT,
                timeout: 5000,
            })
            .post(`/follow?userId=${userId}&followedId=${followedId}`),

    unfollow: (userId, followedId) =>
        axios
            .create({
                baseURL: USER_ENDPOINT,
                timeout: 5000,
            })
            .delete(`/unfollow?userId=${userId}&followedId=${followedId}`),

    getFollowings: (userId) =>
        axios
            .create({
                baseURL: USER_ENDPOINT,
                timeout: 5000,
            })
            .get(`/getFollowing?userId=${userId}`),

    getFollowers: (followedId) =>
        axios
            .create({
                baseURL: USER_ENDPOINT,
                timeout: 5000,
            })
            .get(`/getFollowers?followedId=${followedId}`),

    getAllFollow: () =>
        axios
            .create({
                baseURL: USER_ENDPOINT,
                timeout: 5000,
            })
            .get(`/all`),
};

export default followService;
