import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const createAnAccount = (payload: any) => api.post('/account', payload);
const readAllAccounts = () => api.get('/account');
const updateAnAccount = (id: any, payload: any) => api.put(`/account/${id}`, payload);
const deleteAnAccount = (id: any) => api.delete(`/account/${id}`);

const apis = {
  readAllAccounts,
  createAnAccount,
  updateAnAccount,
  deleteAnAccount,
};

export default apis;
