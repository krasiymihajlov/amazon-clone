import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:5001/fir-d9d80/us-central1/api' //THE API (cloud function) URL - local
    baseURL: 'https://us-central1-fir-d9d80.cloudfunctions.net/api' 
})

export default instance;