import React, {useEffect} from 'react';
import {Col, Form, Row, Slider, Space} from 'antd';
import {cloneDeep} from 'lodash';
import type {SliderMarks} from 'antd/es/slider';
import FColor from '@/components/customerForm/FColor';
import FUploadImg from '@/components/customerForm/FUploadImg';
import FNavigator from "@/components/customerForm/FNavigator";

const PosterEdit: React.FC<{
  dataSource: Record<string, any>;
  update: (value: Record<string, any>) => void;
}> = (props) => {
  const [form] = Form.useForm();
  const {dataSource, update} = props;
  const data = cloneDeep(dataSource);
  const valueChange = () => {
    const value = form.getFieldsValue();
    update({...data, ...value});
  };
  useEffect(() => {
    const list = Object.entries(data).map(([name, value]) => ({
      name,
      value,
    }));
    console.log("=> list", list);
    form.setFields(list);
  }, [form, data]);
  const marks: SliderMarks = {
    0: '0px',
    25: '25px',
  };
  return (
    <Form form={form} onFieldsChange={valueChange}>
      <Form.Item name={'backgroundColor'} label="背景色">
        <FColor/>
      </Form.Item>
      <Form.Item name={'radius'} label="圆角">
        <Slider marks={marks} max={25} min={0}/>
      </Form.Item>
      <Form.Item name={'paddingTopBottom'} label="上下边距">
        <Slider marks={marks} max={25} min={0}/>
      </Form.Item>
      <Form.Item name={'paddingLeftRight'} label="左右边距">
        <Slider marks={marks} max={25} min={0}/>
      </Form.Item>
      <Form.Item name={'marginTopBottom'} label="上下间距">
        <Slider marks={marks} max={25} min={0}/>
      </Form.Item>
      <Form.Item label="图片">
        <Row>
          <Col  flex="102px">
            <Form.Item name={'url'} >
              <FUploadImg limit={1}/>
            </Form.Item>
          </Col>
          <Col flex="auto">
            <Form.Item name={'navigator'}>
              <FNavigator/>
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default PosterEdit;
