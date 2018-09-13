import { routerRedux } from 'dva/router';
import { trim } from '../utilities/dp_string';
import sha256 from 'crypto-js/sha256';
import axios from 'axios';
import Store from '../index';
import * as Services from '../services/users';

// 通用请求头
axios.defaults.baseURL = 'https://app.dpdev.cn';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Platform'] = 'macOS 14.0';
axios.defaults.headers.common['App'] = 'com.dpdev.web 1.0';

export default {
    namespace: 'auth',
    state: 0,
    reducers: {
        add(state, action) {
            return state;      
        },
    },

    effects: {

        // 跳转注册页
        *navigate_signup(action, { call, put }) {
            yield put(routerRedux.push('/signup/'));
        },

        // 跳转登陆页
        *navigate_signin(action, { call, put }) {            
            yield put(routerRedux.replace('/'));
        },

        // 登陆
        *signin({type, payload}, { call, put }) {
            const username = trim(payload.username);
            const password = sha256(trim(payload.password)).toString()
            console.log(username, password);
            const { status, data, message } = yield call(Services.fetch, username, password);
            if (status == 0) {
                console.log(data);
                yield put(routerRedux.replace('/signinsuccess'));
            } else {
                console.log(message);
            }
        },

        // 注册
        *signup(action, { call, put }) {
            
        },
    },
}