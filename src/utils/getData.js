import axios from 'axios';

const instance  = axios.create({
    baseURL: 'http://localhost:3000/'
})

export async function getLastQuiz() {
    const { data } = await instance.get('/lastQuiz');
    data.date = new Date(data.date).toDateString()
    return data;
}