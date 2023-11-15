import axios from 'axios';

const auth = {
    username: 'samuel',
    password: 'samuel159',
    };

const motelApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/motel/'
})

const roomApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/room/'
});

const consApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/consulta/'
});

export const getAllMotel = () => motelApi.get("/")
export const createMotel = (motel) => motelApi.post('/', motel);
export const getAllRoom = () => roomApi.get("/")
export const createRoom = (room) => roomApi.post('/', room);
export const consRoom = (id_motel) => consApi.post('/', id_motel);