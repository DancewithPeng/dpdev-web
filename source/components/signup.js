import React from 'react'
import { Welcome } from './welcome'
import 'antd/dist/antd.css';
import styles from './signup.css';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Signup extends React.Component {

    // 处理提交
    handleSubmit(e) {
        console.log(e);
    }

    // 处理注册链接
    handleLinkClick(e) {
        console.log(e)
    }

    render() {
        return(
            <Welcome>
                <Form className= { styles.login_form } onSubmit={this.handleSubmit}>
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的用户名" />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入您的密码" />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请确认您的密码" />
                    </FormItem>
                    <FormItem>                            
                        <Button type="primary" htmlType="submit" className={ styles.login_form_button }>
                            注册
                        </Button>                            
                    </FormItem>
                    <FormItem>
                        <a className={ styles.login_form_forgot } onClick={this.handleLinkClick} >
                            返回登录
                        </a>
                    </FormItem>
                </Form>
            </Welcome>
        );
    }
}

export { Signup }