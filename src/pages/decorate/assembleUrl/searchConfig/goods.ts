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
    name: '商品状态',
    options: {
      data: []
    }
  },
  {
    type: FormType.SELECT,
    key: 'status',
    name: '商品状态',
    options: {}
  }
]

/**
 * 展示字段
 */

const columns = [
  {
    title: '商品图片',
    dataIndex: 'picture',
    key: 'picture',
  }, {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '商品状态',
    dataIndex: 'status',
    key: 'status',
  },
];
export {searchField, columns}
