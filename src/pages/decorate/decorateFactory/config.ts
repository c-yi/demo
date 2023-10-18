const imgUrl = 'https://tuapi.eees.cc/api.php?category=dongman&type=302';

const decorationConfig = [
  {
    blockTitle: '基础组件',
    components: [
      {
        name: '轮播图',
        id: 'Carousel',
        logo: '',
        componentName: 'Carousel',
        dataSource: {
          imgList: [imgUrl,imgUrl],
          backgroundColor: '#EEE',
          radius: '4',
          paddingTopBottom: '10',
          paddingLeftRight: '10',
          marginTopBottom: '',
        },
      },
      {
        name: '海报',
        id: 'Poster',
        componentName: 'Poster',
        dataSource: {
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          navigator: {
              val:['Zhejiang', 'Hangzhou', 'West Lake']
          },
          backgroundColor: '#FFF',
          radius: '4',
          paddingTopBottom: '10',
          paddingLeftRight: '10',
          marginTopBottom: '',
        },
      },
    ],
  },
];
export default decorationConfig;
