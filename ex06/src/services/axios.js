import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://618a95c1-959f-4c26-8e00-b85f70d7eb2b.mock.pstmn.io'
})

export default instance;