import axios from 'axios';

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在,则统一在http请求的header都加上token,这样后台根据token判断你的登录情况
        // 即使本地存在token,也有可能token是过期的,所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        // Toast.loading('载入中');
        // setTimeout(() => {
        //     Toast.hide()
        // }, 200);
        return config;
    },
    error => {
        console.log(error)
        const { response } = error;
        if (response) {
            // 请求已发出,但是不在2xx的范围
            errorHandle(response.status, response.data.message);
            Toast.failed('获取失败');
            setTimeout(() => {
                Toast.hide()
            }, 200);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时,更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据,会在断网组件中说明
            const networkStatus = app.networkStatus();
            // store.commit('changeNetwork', networkStatus);
        }
    });
    
export function get(url, params) {
    console.log(1111111111)
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params })
            .then(res => {
                console.log(res.status)
                switch(res.status) {
                    case 200:
                        if(res.data != "") resolve(res.data)
                        break;
                }
                console.log(res)
            })
            .catch(err => {
                reject(err.data);
            })
    })
}