import axios from "axios";
const SERVER_PORT = 8080;
const USER_ENDPOINT = `http://localhost:${SERVER_PORT}/f`;
const userService = {
    // follow: (userId, followedId) =>
    //     axios
    //         .create({
    //             baseURL: USER_ENDPOINT,
    //             timeout: 5000,
    //         })
    //         .post(`/follow?userId=${userId}&followedId=${followedId}`),
    follow: async (userId, followedId) => {
        try {
            const response = await axios.post(
                `/follow?userId=${userId}&followedId=${followedId}`
            );
            return response.data; // Assuming the server sends a boolean response
        } catch (error) {
            console.error("Error in followService.follow:", error);
            throw error; // Rethrow the error so that the component can catch it
        }
    },

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

export default userService;
