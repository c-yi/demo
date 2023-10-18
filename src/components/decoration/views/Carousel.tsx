import {Carousel as CarouselComponent} from 'antd';
import React from "react";
import {cloneDeep} from "lodash";
import DefaultComponent from "@/components/decoration/DefaultComponent";


interface IProps {
  paddingTopBottom: number
  paddingLeftRight: number
  marginTopBottom: number
  backgroundColor: number
  radius: number
  imgList: string[]
}

const Carousel: React.FC<{ dataSource: IProps }> = (props) => {
  const {dataSource} = props;

  const data = cloneDeep(dataSource);
  const styleBg: React.CSSProperties = {
    padding: `${data?.paddingTopBottom || 0}px ${data?.paddingLeftRight || 0}px`,
    margin: `${data?.marginTopBottom || 0}px  0px`,
    backgroundColor: `${data?.backgroundColor ?? 'green'}`,
  };
  const style: React.CSSProperties = {
    borderRadius: `${data?.radius || 0}px`,
  };
  if (data?.imgList.length === 0) {
    return <DefaultComponent dataSource={{ ...dataSource}}/>
  }
  return (
    <div style={styleBg}>
      <CarouselComponent autoplay>
        {data?.imgList.map((imgUrl, idx) => {
          return (<img src={imgUrl} key={imgUrl + idx} alt="" style={style}/>)
        })}
      </CarouselComponent>
    </div>
  )
}

export default Carousel
