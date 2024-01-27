import axios from 'axios';

const request = axios.create({
    baseURL: 'https://shinecgialai.com.vn/api/',
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
    },
});

request.interceptors.request.use(async (config: any) => {
    let token = window.localStorage.getItem('wf_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

request.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error) => {
        if (error?.response?.status === 401) {
            axios.post('https://shinecgialai.com.vn/api/user/password-sign-in', {
                userName: 'admin',
                passWord: 'Password@123'
            }).then(response => {
                localStorage.setItem('wf_token', response.data.token);
                window.location.reload();
            })
        }
        console.log(
            'error => ',
            error?.response?.config?.url,
            error?.response?.status
        );
        throw error;
    }
);

export default request