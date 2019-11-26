export default [
  {
    key: '1',
    name: '商品管理',
    icon: 'user',
    children: [
      {
        key: '/spu-manage',
        name: 'SPU管理'
      },
      {
        key: '/sku-manage',
        name: 'SKU管理'
      },
      {
        key: '/classify-manage',
        name: '分类管理'
      },
      {
        key: '/brand-manage',
        name: '品牌管理'
      },
      {
        key: '/supplier-manage',
        name: '供应商管理'
      }
    ]
  },
  {
    key: '2',
    name: '订单管理',
    icon: 'team',
    children: [
      {
        key: '21',
        name: '订单菜单一'
      },
      {
        key: '22',
        name: '订单菜单二'
      }
    ]
  },
  {
    key: '3',
    name: '营销管理',
    icon: 'team',
    children: [
      {
        key: '31',
        name: '营销菜单一'
      }
    ]
  },
  {
    key: '4',
    name: '用户管理',
    icon: 'team'
  },
  {
    key: '5',
    name: '财务管理',
    icon: 'team'
  }
]