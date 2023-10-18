enum FormType {
  SELECT,
  INPUT
}

/**
 * 搜索参数
 */
const searchField = [
  {
    type: FormType.SELECT,
    key: 'store',
    name: '所属商铺',
    options: {
      data: [],
      format: () => {
      }
    }
  },
  {
    type: FormType.INPUT,
    key: 'status',
    name: '活动状态',
    options: {
      data: []
    }
  },
  {
    type: FormType.SELECT,
    key: 'activityType',
    name: '活动类型',
    options: {}
  }
]

/**
 * 展示字段
 */

const columns = [
  {
    title: '活动图片',
    dataIndex: 'picture',
    key: 'picture',
  }, {
    title: '活动名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '活动状态',
    dataIndex: 'status',
    key: 'status',
  },
];
export {searchField, columns}
