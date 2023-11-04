import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://d2f630f5-66c8-45a2-aadc-19ccae7e1145.mock.pstmn.io'
})

export default instance;