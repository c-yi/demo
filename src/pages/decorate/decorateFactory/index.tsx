import React, {useCallback, useEffect, useState} from 'react';
import {Avatar, Col, Row, Button} from 'antd';
import config from './config';
import phonePng from '@/components/decoration/assets/phone-bg.png';
import Decorate from '@/components/decoration/views/index';
import DecorateEdit from '@/components/decoration/edits/index';
import {Container, Draggable} from 'react-smooth-dnd';
import type {ComponentConfig, IPage, DragResult} from './decorateType';
import {cloneDeep} from 'lodash';
import template from './mock/index';
import html2canvas from 'html2canvas';

const style: React.CSSProperties = {
  height: 'calc( 100vh - 48px - 56px )',
};
const styleBg: React.CSSProperties = {
  backgroundImage: `url(${phonePng})`,
};

const DROP_GROUP = 'drag';

const Index: React.FC = () => {
  const [pageTemple, setPageTemple] = useState<IPage>(template); // 模板数据
  const [component, setComponent] = useState<ComponentConfig>(); // 当前编辑的组件
  const [currentIndex, setCurrentIndex] = useState<number | null>(null); // 当前编辑的组件
  // const [url, setUrl] = useState<string>(''); // 当前编辑的组件

  /**
   * 设置页面信息
   */
  const editPageInfo = () => {
    setComponent({
      componentName: 'PageInfo',
      dataSource: pageTemple.pageInfo,
    });
    setCurrentIndex(null);
  };
  useEffect(() => {
    if (currentIndex !== null) return;
    editPageInfo();
  }, [pageTemple]);

  /**
   * 渲染物料
   * @param componentName
   * @param data 物料渲染参数
   * @constructor
   */
  const RenderViews = (componentName: string, data: any) => {
    console.log('-> componentName', componentName);
    if (!componentName) return null;
    const ViewComponent = Decorate[componentName];
    return <ViewComponent dataSource={data}/>;
  };

  /**
   * 物料区 获取当前操作的组件
   * @param index 区块索引(基础组件,营销组件)
   * @param currenIndex 区块下的物料索引
   */
  const getChildFromPayload = (index: number, currenIndex: number) => {
    const dragComponent = config[index].components[currenIndex];
    return {
      componentName: dragComponent.componentName,
      dataSource: dragComponent.dataSource,
    };
  };

  /**
   * 展示区 获取当前操作的组件
   * @param index
   */
  const getChildPayload = (index: number) => {
    return pageTemple.config[index];
  };

  /**
   * 拖动释放时出发重新排序事件
   * @param dragResult
   */
  const onDrop = (dragResult: DragResult & any) => {
    console.log('-> dragResult', dragResult);
    const {removedIndex, addedIndex, payload} = dragResult;
    const result = [...pageTemple.config];

    // 移除物料
    if (removedIndex !== null) {
      result.splice(removedIndex, 1);
    }

    // 新增物料
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, payload);
    }

    setPageTemple({...pageTemple, config: result});
  };

  /**
   * 更新模板信息
   * @param value
   */
  const updatePageInfo = (value: Record<string, any>) => {
    console.log('-> 更新当前组件信息', value);
    const newPageTemple = cloneDeep(pageTemple);
    if (currentIndex === null) {
      setPageTemple({...newPageTemple, pageInfo: {...newPageTemple.pageInfo, ...value}});
    } else {
      newPageTemple.config[currentIndex].dataSource = value;
      setComponent(newPageTemple.config[currentIndex]);
      setPageTemple(newPageTemple);
    }
  };
  const saveToCanvas = (container: any, options?: any) => {
    // 设置放大倍数
    const scale = window.devicePixelRatio;

    // 传入节点原始宽高
    const _width = container.offsetWidth;
    const _height = container.offsetHeight;

    let {width = '', height = ''} = options ?? {};
    width = width || _width;
    height = height || _height;

    // html2canvas配置项
    const ops = {
      scale,
      width,
      height,
      useCORS: true,
      allowTaint: false,
      ...options,
    };
    return html2canvas(container, ops).then((canvas) => {
      // 返回图片的二进制数据
      return canvas.toDataURL('image/png');
    });
  };
  const saveTemplate = async () => {
    const ele = document.getElementById('view-screen');
    const res = await saveToCanvas(ele);
    console.log('-> res', res);
  };
  /**
   * 渲染编辑区
   */
  const renderEdit = useCallback(() => {
    if (!component?.componentName) return null;
    const EditComponent = DecorateEdit[`${component?.componentName}Edit`];
    return <EditComponent dataSource={component.dataSource} update={updatePageInfo}/>;
  }, [component, pageTemple]);

  const selectCurrenComponent = (item: ComponentConfig, index: number | null) => {
    setCurrentIndex(index);
    setComponent(item);
  };
  return (
    <div style={style}>
      <Row>
        <Col span={6} className={'shadow-lg'}>
          {config.map((item, index) => {
            return (
              <div key={item.blockTitle}>
                <div className={'p-[20px]'}>{item.blockTitle}</div>
                <Container
                  getChildPayload={(currenIndex) => getChildFromPayload(index, currenIndex)}
                  groupName={DROP_GROUP}
                  behaviour="copy"
                  style={{display: 'flex', flexWrap: 'wrap'}}
                >
                  {item.components.map((view) => {
                    return (
                      <Draggable
                        key={view.id}
                        className={'mb-[10px] ml-[18px] hover:cursor-move flex'}
                      >
                        <div
                          className={'flex justify-center flex-col items-center w-[75px] h-[75px]'}
                        >
                          <Avatar shape="square"/>
                          <div className={'pt-[10px]'}>{view.name}</div>
                        </div>
                      </Draggable>
                    );
                  })}
                </Container>
              </div>
            );
          })}
        </Col>
        {/* 屏幕 */}
        <Col
          flex={'auto'}
          className={'ml-[24px] mr-[24px] p-[24px] flex justify-center items-center'}
        >
          <div
            id="view-screen"
            className={
              'bg-cover w-[375px] h-[667px] bg-no-repeat bg-white shadow-lg rounded-[14px]'
            }
            style={styleBg}
          >
            <div
              className={
                'text-center font-bold  cursor-pointer mt-[30px] border-b-gray-200 border-solid border-b-[2px] p-[16px]'
              }
              onClick={editPageInfo}
            >
              {pageTemple.pageInfo.pageName}
            </div>
            <div
              className={`h-[564px] w-[378px]  overflow-auto rounded-b-[14px]  scroll-mr-36`}
              style={{
                padding: `${pageTemple?.pageInfo?.padding || 0}px`,
                backgroundColor: `${pageTemple.pageInfo?.backgroundColor || '#FFF'}`,
              }}
            >
              <Container
                getChildPayload={getChildPayload}
                style={{minHeight:'564px'}}
                onDrop={onDrop}
                groupName={DROP_GROUP}
                behaviour="move"
              >
                {pageTemple.config.map((item, index) => {
                  return (
                    <Draggable key={`${item.componentName}+${index}`}>
                      <div onClick={() => selectCurrenComponent(item, index)}>
                        {RenderViews(item.componentName, item.dataSource)}
                      </div>
                    </Draggable>
                  );
                })}
              </Container>
            </div>
          </div>
        </Col>
        {/* 编辑 */}
        <Col span={7} className={'shadow-lg p-[24px]'}>
          <div className={'border-solid border-l-[6px] border-l-fuchsia-600 pl-1.5 mb-2'}>
            {component?.componentName}
          </div>
          {renderEdit()}
        </Col>
      </Row>
      <div className={'flex h-[20px]'}>
        <Button type="primary" onClick={saveTemplate}>
          保存
        </Button>
      </div>
    </div>
  );
};

export default Index;
