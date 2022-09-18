import axios from 'axios'

const baseURL = 'https://api-heroes-fimlm.herokuapp.com';

const heroeApi = axios.create({ baseURL });

export default heroeApi;