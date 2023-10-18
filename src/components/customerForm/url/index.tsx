
const url= {
  type:'GOODS',
  path:'/goods/detail/',
  params:{}
}

/**
 * 第一步
 * 使用 最后一级级联选择器
 * 第二步
 * 需要唤醒相应的选择框，如商品，活动，分类，H5页面
 * 第三步
 * 选中相应的数据后需要，展示在页面上
 * 第四步
 * 需要相应删除功能
 * 第五步
 * 拖拽不影响其他功能
 */
interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default options
