import axios from 'axios';

const burl = "http://localhost:5000"
const headers = {
    'Content-Type': 'application/json',
    'x-access-token': 'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAd/JKKaBGsEoUY+GM1TIGQcOcEkXRtA4CO8vfMP49RGVPlGZJhKBnrA6xIZXA7K/+REPWbLfnoUQ4yi56avsN6wIDAQAB'
}
const header = { 
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default' 
};
export default {
    dashboard : async function() {
        const results = await axios.get(burl + '/peaks', header);
        return results.data.data.results;
    }
}
