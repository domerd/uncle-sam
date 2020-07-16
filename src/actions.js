/**
 * Created by omerdoron on 16/07/2020.
 */

import axios from 'axios';

export const getFarmers = () => {
    console.log('Getting Farmers');
    return axios.get('/api/farmers');
};
