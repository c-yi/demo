import React from 'react';
import { cloneDeep } from 'lodash';

const Poster: React.FC<{ dataSource: any }> = (props) => {
  const { dataSource } = props;

  const data = cloneDeep(dataSource);
  const styleBg: React.CSSProperties = {
    padding: `${data?.paddingTopBottom || 0}px ${data?.paddingLeftRight || 0}px`,
    margin: `${data?.marginTopBottom || 0}px  0px`,
    backgroundColor: `${data?.backgroundColor ?? 'green'}`,
  };
  const style: React.CSSProperties = {
    borderRadius: `${data?.radius || 0}px`,
  };
  return (
    <div style={styleBg}>
      <img src={data.url} alt="" style={style} />
    </div>
  );
};

export default Poster;
