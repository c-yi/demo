import React, { useEffect } from 'react';
import type { IPage } from '@/pages/decorate/decorateFactory/decorateType';
import { cloneDeep } from 'lodash';
import { Form, Input, Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import FColor from '@/components/customerForm/FColor';

const PageConfig: React.FC<{ dataSource: Record<string, any>; update: (value: IPage) => void }> = (
  props,
) => {
  const [form] = Form.useForm();
  const { dataSource, update } = props;
  const pageInfo = cloneDeep(dataSource);
  const valueChange = () => {
    const value = form.getFieldsValue();
    update({ ...pageInfo, ...value });
  };
  useEffect(() => {
    const list = Object.entries(pageInfo).map(([name, value]) => ({
      name,
      value,
    }));
    form.setFields(list);
  }, [form, pageInfo]);
  const marks: SliderMarks = {
    0: '0px',
    25: '25px',
  };
  return (
    <Form form={form} onFieldsChange={valueChange}>
      <Form.Item name={'pageName'} label="页面名称">
        <Input className={'w-[100%]'} value={pageInfo.pageName} />
      </Form.Item>
      <Form.Item name={'backgroundColor'} label="背景色">
        <FColor />
      </Form.Item>
      <Form.Item name={'padding'} label="页面边距">
        <Slider marks={marks} max={25} min={0} />
      </Form.Item>
    </Form>
  );
};
export default PageConfig;
