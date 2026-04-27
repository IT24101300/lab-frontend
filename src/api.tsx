import axios from 'axios';
const API = axios.create({
baseURL: import.meta.env.VITE_API_URL,
});
export const getItems = () => API.get('/items');
export const createItem = (data: object) => API.post('/items', data);
export const deleteItem = (id: string) => API.delete(`/items/${id}`);
export const updateItem = (id: string, data: object) => API.put(`/items/${id}`, data);