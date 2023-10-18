import {Form, Slider} from 'antd';
import React, {useEffect} from "react";
import {cloneDeep} from "lodash";
import {SliderMarks} from "antd/es/slider";
import FColor from "@/components/customerForm/FColor";
import FUploadImg from "@/components/customerForm/FUploadImg";


interface IProps {
  dataSource: Record<string, any>;
  update: (value: Record<string, any>) => void;
}

const CarouselEdit: React.FC<IProps> = (props) => {
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
      <div>
      </div>
    </Form>
  );
};
export default CarouselEdit
