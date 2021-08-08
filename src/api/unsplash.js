import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6H7BCUg4cvUsRH4gHer6zlggSBIfS9gxTOKiIdS0oBw'
    }
});