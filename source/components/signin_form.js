import React from 'react'
import { Welcome } from './welcome'
import 'antd/dist/antd.css';
import styles from './signin_form.css';

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class SigninForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleLinkClick = this.handleLinkClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 处理提交
    handleSubmit(e) {
        e.preventDefault();
        
        // 校验表单中的字段值
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 触发登陆
                this.props.dispatch({ type: 'auth/signin', payload: values});
            } else {
                console.log(err);
            }
        });
    }

    // 处理注册链接
    handleLinkClick(e) {

        e.preventDefault();

        // 发送action
        this.props.dispatch({ type: 'auth/navigate_signup' });
    };

    render() {

        // getFieldDecorator用户跟表单控件进行双向绑定
        const { getFieldDecorator } = this.props.form;

        return (
            <Welcome>
                <Form className= { styles.login_form } onSubmit={this.handleSubmit}>
                    <FormItem> 
                        { 
                            getFieldDecorator('username', {rules: [{ required: true, message: '用户名不能为空' }],})(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的用户名" />)
                        }                        
                    </FormItem>
                    <FormItem>
                        { 
                            getFieldDecorator('password', {rules: [{ required: true, message: '密码不能为空' }],})(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入您的密码" />)
                        }                             
                    </FormItem>
                    <FormItem>                            
                        <Button type="primary" htmlType="submit" className={ styles.login_form_button }>
                            登录
                        </Button>                            
                    </FormItem>
                    <FormItem>
                        <a className={ styles.login_form_forgot } onClick={this.handleLinkClick} >
                            还没有账号？快来注册吧！
                        </a>
                    </FormItem>
                </Form>
            </Welcome>
        );
    }
}

// atnd的Form表单需要这样创建
export default Form.create()(SigninForm);