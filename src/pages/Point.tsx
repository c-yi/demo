import React from 'react';
import {Button, Image , Form, Input, Radio} from 'antd';
import UploadFile from "@/pages/uploadFile";
import pointPng from "../../public/image/location.png";

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
      label="站点名称"
      name="username"
      rules={[{required: true, message: 'Please input your 站点名称!'}]}
    >
      <Input/>
    </Form.Item>

    <Form.Item<FieldType>
      label="经纬度"
      name="password"
      rules={[{required: true, message: 'Please input your 年龄!'}]}
    >
      <Image
        width={600}
        src={pointPng}
      />
    </Form.Item>

    <Form.Item<FieldType>
      label="地标建筑"
      name="password"
      rules={[{required: true, message: 'Please input your 地标!'}]}
    >
      <UploadFile/>
    </Form.Item>

    <Form.Item wrapperCol={{offset: 8, span: 16}}>
      <Button  type={'primary'}  htmlType="submit">
        添加站点
      </Button>
    </Form.Item>
  </Form>
);

export default Region;
