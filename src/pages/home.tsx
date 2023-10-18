import React from 'react';
import {Button, Checkbox, Form, Input, Radio} from 'antd';
import UploadFile from "@/pages/uploadFile";

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Region: React.FC = () => (
  <Form
    name="basic"
    labelCol={{span: 8}}
    wrapperCol={{span: 16}}
    style={{maxWidth: 600}}
    initialValues={{remember: true}}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="姓名"
      name="username"
      rules={[{required: true, message: 'Please input your 姓名!'}]}
    >
      <Input/>
    </Form.Item>

    <Form.Item<FieldType>
      label="年龄"
      name="password"
      rules={[{required: true, message: 'Please input your 年龄!'}]}
    >
      <Input.Password/>
    </Form.Item>

    <Form.Item<FieldType>
      label="性别"
      name="password"
      rules={[{required: true, message: 'Please input your 性别!'}]}
    ><Radio.Group>
      <Radio value={1}>男</Radio>
      <Radio value={2}>女</Radio>
    </Radio.Group>
    </Form.Item>
    <Form.Item<FieldType>
      label="头像"
      name="password"
      rules={[{required: true, message: 'Please input your 头像!'}]}
    >
      <UploadFile/>
    </Form.Item>
    <Form.Item<FieldType>
      label="证件"
      name="password"
      rules={[{required: true, message: 'Please input your 证件!'}]}
    >
      <UploadFile/>
    </Form.Item>


    <Form.Item<FieldType>
        label="银行卡号"
        name="password"
        rules={[{required: true, message: 'Please input your 银行卡号!'}]}
    >
      <Input.Password/>
    </Form.Item>
    <Form.Item wrapperCol={{offset: 8, span: 16}}>
      <Button  type={'primary'}  htmlType="submit">
        注册
      </Button>
    </Form.Item>
  </Form>
);

export default Region;
