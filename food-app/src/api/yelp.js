import axios from 'axios';
import Constants from 'expo-constants';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: Constants.manifest.extra.mysecret,
    },
});
