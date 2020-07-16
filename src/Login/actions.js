/**
 * Created by omerdoron on 16/07/2020.
 */


import axios from 'axios';

export const login = ({username, password}) => {
    return axios.post('/api/login', { username, password });
};
