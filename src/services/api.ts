import axios from 'axios';

const api = axios.create({
    baseURL: 'http://SEU_IP:3333'
});

export default api;