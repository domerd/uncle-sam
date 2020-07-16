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
        form.validateFields().then(({ username, password }) => {
            login({username, password}).then(({ data }) => {
                console.log('Login success');
                onLoginSuccess(data.access_token);
            }).catch(err => console.log('Failed login', err));
        });
    };

    return <Form form={form} onFinish={submit} className="login-form">
        <Form.Item name="username" rules={[{ required: true, message: 'Please fill in your Username!' }]}>
            <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password"  rules={[{ required: true, message: 'Please fill in your Password!' }]}>
            <Input placeholder="Password" />
        </Form.Item>
        <Button onClick={submit}>
            Login!
        </Button>
    </Form>;


};

export default LoginForm;

