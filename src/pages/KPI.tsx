import React from 'react';
import {Avatar, Button, Card, DatePicker, Form, Input, Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {UserOutlined} from "@ant-design/icons";

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  avatar: string;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'avatar',
    render: (text) => <Avatar size={64} icon={<UserOutlined/>}/>,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '工作站点',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '联系方式',
    dataIndex: 'tel',
    key: 'tel',
  },
  {
    title: '考勤状态',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, {tags}) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === '缺勤') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>查看</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    avatar: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tel: '131XXXXX',
    tags: ['正常'],
  },
  {
    key: '2',
    name: 'Jim Green',
    avatar: 'John Brown',
    age: 42,
    address: 'London No. 1 Lake Park',
    tel: '131XXXXX',
    tags: ['缺勤'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '131XXXXX',
    avatar: 'John Brown',
    address: 'Sydney No. 1 Lake Park',
    tags: ['正常'],
  },
  {
    key: '4',
    name: 'Jim Green',
    avatar: 'John Brown',
    age: 42,
    address: 'London No. 1 Lake Park',
    tel: '131XXXXX',
    tags: ['缺勤'],
  },
  {
    key: '5',
    name: 'Joe Black',
    avatar: 'John Brown',
    age: 32,
    tel: '131XXXXX',
    address: 'Sydney No. 1 Lake Park',
    tags: ['正常'],
  },
];

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const KPI: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <Card>
        <Form
          name="basic"
          layout={"inline"}
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="站点"
            name="username"
          >
            <Input/>
          </Form.Item>

          <Form.Item<FieldType>
            label="姓名"
            name="password"
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item<FieldType>
            label="日期"
            name="password"
          >
            <DatePicker/>
          </Form.Item>

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type={'primary'} htmlType="submit">
              搜索
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type={'primary'}>
              导出考勤记录
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Table columns={columns} dataSource={data}/>;
    </div>
  )
}
export default KPI;
