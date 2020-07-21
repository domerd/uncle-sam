/**
 * Created by omerdoron on 16/07/2020.
 */

import axios from 'axios';

export const getFarmers = () => axios.get('/api/farmers');

export const getCountries = () => axios.get('/api/countries');

export const getMap = () => axios.get('/api/map');
