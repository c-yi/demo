import React from "react";
import {Cascader} from 'antd';

import type {DefaultOptionType} from 'antd/es/cascader';
import options from "@/components/customerForm/url";


interface NavigatorProps {
  value?: {
    val: string[] | number[]
    detailValue?: any
  };
  onChange?: (value: string[]) => void;
}



const FNavigator: React.FC<NavigatorProps> = (props) => {
  const {value, onChange} = props;
  const open = (val:any,selectedOptions:any) =>{
    console.log("=> val", val);
    console.log("=> selectedOptions", selectedOptions);

  }
  return <Cascader value={value?.val} options={options} allowClear onChange={open}
                   placeholder="请选择跳转路径"/>
}
export default FNavigator
