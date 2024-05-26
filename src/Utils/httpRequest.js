import axios from 'axios';

const request = axios.create({
    baseURL: 'https://apiclothes.xsubuntu.click/',
});

export default request;
