import React from 'react';
import {Avatar, Button, Card, DatePicker, Form, Input, Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {UserOutlined} from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  avatar: string;
  date: string;
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
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '站点',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '工作时间',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '上班状态',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, {tags}) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === '休息') {
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
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>分配站点</a>
        <a>分配直属上司</a>
        <a>分配工作时间</a>
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
    date: "9:00-18:00",
    address: 'New York No. 1 Lake Park',
    tags: ['正常'],
  },
  {
    key: '2',
    name: 'Jim Green',
    avatar: 'John Brown',
    age: 42,
    date: "9:00-18:00",
    address: 'London No. 1 Lake Park',
    tags: ['休息'],
  },
  {
    key: '3',
    name: 'Joe Black',
    avatar: 'John Brown',
    age: 32,
    date: "9:00-18:00",
    address: 'Sydney No. 1 Lake Park',
    tags: ['正常'],
  },
  {
    key: '4',
    name: 'John Brown',
    avatar: 'John Brown',
    age: 32,
    date: "9:00-18:00",
    address: 'New York No. 1 Lake Park',
    tags: ['正常'],
  },
  {
    key: '5',
    name: 'Jim Green',
    avatar: 'John Brown',
    age: 42,
    date: "9:00-18:00",
    address: 'London No. 1 Lake Park',
    tags: ['休息'],
  },
  {
    key: '6',
    name: 'Joe Black',
    avatar: 'John Brown',
    age: 32,
    date: "9:00-18:00",
    address: 'Sydney No. 1 Lake Park',
    tags: ['正常'],
  },
];

type FieldType = {
  username?: string;
  password?: string;
  point?: string;
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
            label="用户名"
            name="username"
          >
            <Input/>
          </Form.Item>
          <Form.Item<FieldType>
            label="站点"
            name="point"
          >
            <Input/>
          </Form.Item>

          <Form.Item<FieldType>
            label="电话"
            name="password"
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item<FieldType>
            label="工作时间"
            name="password"
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type={'primary'} htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Table columns={columns} dataSource={data}/>;
    </div>
  )
}
export default KPI;
