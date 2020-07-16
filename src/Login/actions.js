/**
 * Created by omerdoron on 16/07/2020.
 */

import axios from 'axios';

export const addJWTToHeader = (jwToken) => {
    console.log('Adding token to axios headers');
    axios.defaults.headers.common.Authorization = `Bearer ${jwToken}`;
};

export const login = ({ username, password }) => axios.post('/api/login', { username, password });

export const validateToken = (jwtToken) => axios.post('/api/token/verify', {}, {
    headers: { Authorization: `Bearer ${jwtToken}` },
});
