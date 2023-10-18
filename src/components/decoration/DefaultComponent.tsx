import React from "react";
import {cloneDeep} from "lodash";

interface IDefaultComponentProps {
  themeColor?: string;
  paddingTopBottom?: number
  paddingLeftRight?: number
  marginTopBottom?: number
  backgroundColor?: number
  radius?: number
  name?: string

  [key: string]: unknown
}

const DefaultComponent: React.FC<{ dataSource: IDefaultComponentProps }> = (props) => {
  const {dataSource} = props;
  const data = cloneDeep(dataSource);
  const styleBg: React.CSSProperties = {
    padding: `${data?.paddingTopBottom || 0}px ${data?.paddingLeftRight || 0}px`,
    margin: `${data?.marginTopBottom || 0}px  0px`,
    backgroundColor: `${data?.backgroundColor ?? 'green'}`,
    border: '2px solid #eee',
    borderRadius: `${data?.radius || 0}px`,
    width: '100%',
    height: '300px',
  };
  console.log("-> data", data);
  return <div style={styleBg}>
    {data?.name}
  </div>
}

export default DefaultComponent
