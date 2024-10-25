import axios from 'axios'

// axios instace
export const axiosPublic = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
})
