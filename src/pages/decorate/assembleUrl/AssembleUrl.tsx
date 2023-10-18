import React from 'react';
import {Select} from 'antd';
import {UrlType} from "@/pages/decorate/assembleUrl/types";

interface AssembleUrlIProps {
  name: string
  data: any
  type: UrlType

  [keys: string]: unknown
}

const url_factory = () => {

}

const AssembleUrl: React.FC<AssembleUrlIProps> = (props) => {
  const {name, data} = props
  if (name) {
    return <div>name</div>;
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Select
        defaultValue="lucy"
        style={{width: 120}}
        onChange={handleChange}
        options={
          [
            {value: 'jack', label: 'Jack'},
            {value: 'lucy', label: 'Lucy'},
            {value: 'Yiminghe', label: 'yiminghe'},
            {value: 'disabled', label: 'Disabled', disabled: true},
          ]}
      />
    </div>
  );
}

export default AssembleUrl;
