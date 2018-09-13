import { connect } from 'dva';
import React from 'react';
import { Welcome } from '../components/welcome';

function SigninSuccess(props) {
    return (
        <Welcome>
            <h1>哈哈哈哈</h1>
            <h1>敬请期待</h1>
        </Welcome>
    );
}

function mapStateToProps(state) {
    return {
        count: 100
    };
}

const SigninSuccessPage = connect(mapStateToProps)(SigninSuccess);
export { SigninSuccessPage }
