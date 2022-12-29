import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID lKRWXwx1JWjvDGaQoSIoh2MKMT4skEe8tgsttIp9DM0'
    }
});