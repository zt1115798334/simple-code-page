import axios from 'axios'

/**
 * 抽象接口请求方法
 * @returns {*}
 */
export function createAPI() {
    axios.defaults.withCredentials = true;
    axios.defaults.timeout = 60000;
    axios.interceptors.response.use(res => {

        if (res.status >= 200 && res.status < 400) {
            if (res.data.meta && [3001, 3002, 3003].indexOf(res.data.meta.code) >= 0) {
                return
            }
            return res
        }
        return Promise.reject(res)
    }, err => {
        return Promise.reject(err)
    });
    return {
        /**
         * post请求
         * @param target  请求地址
         * @param params  请求参数
         * @returns {Promise}
         */
        post(target, params) {
            return new Promise((resolve, reject) => {
                axios.post(target, params, {
                    responseType: 'json',
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(res => {
                    if (res.data.meta.success) {
                        resolve(res.data);
                    }else{
                        this.$notify.error({
                            title: '错误',
                            message: res.data.message
                        });
                    }
                }).catch((err) => {
                    this.$notify.error({
                        title: '错误',
                        message: '系统错误'
                    });
                    reject(err)
                })
            })
        },
        postDown(target, params) {
            return new Promise((resolve, reject) => {
                axios.post(target, params, {
                    responseType: 'blob',
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }).then(res => {
                    resolve(res);
                }).catch((err) => {
                    this.$notify.error({
                        title: '错误',
                        message: '系统错误'
                    });
                    reject(err)
                })
            })
        },
        postJSON(target, params = {}) {
            return new Promise((resolve, reject) => {
                axios.post(target, params, {
                    responseType: 'json',
                    headers: {"Content-Type": "application/json"}
                }).then(res => {
                    if (res.data.meta.success) {
                        resolve(res.data);
                    }else{
                        this.$notify.error({
                            title: '错误',
                            message: res.data.message
                        });
                    }
                }).catch((err) => {
                    reject(err.data)
                })
            })
        },
    }
}
