/**
 * Created by omerdoron on 16/07/2020.
 */

import React from 'react';
import {Button, Form, Input} from 'antd';
import {login} from './actions';
import './LoginForm.css';

const LoginForm = ({ onLoginSuccess }) => {
    const [form] = Form.useForm();

    const submit = () => {
        const { username, password } = form.getFieldsValue();

        login({username, password}).then(({ data }) => {
            console.log('Login success');
            onLoginSuccess(data.access_token);
        }).catch(err => console.log('Failed login', err));
    };

    return <Form form={form} onFinish={submit} className="login-form">
        <Form.Item required name="username">
            <Input placeholder="Please fill in the username" />
        </Form.Item>
        <Form.Item required name="password">
            <Input placeholder="Please fill in the password" />
        </Form.Item>
        <Button onClick={submit}>
            Login!
        </Button>
    </Form>;


};

export default LoginForm;

