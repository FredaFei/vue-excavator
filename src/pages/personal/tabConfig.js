let tab = [{
      path: 'intention',
      name: '租售意向单',
      icon: 'zhu',
      lists: ['租赁意向单', '购买意向单']
    }, {
      path: 'order',
      name: '我的订单',
      icon: 'order',
      lists: ['全部', '待付款', '待发货', '待收货']
    }, {
      path: 'aftersale',
      name: '退款售后',
      icon: 'shouhou2',
      lists: ['全部']
    }, {
      path: 'cart',
      name: '我的购物车',
      icon: 'gouwuche2',
      lists: ['挖掘机租赁', '挖掘机售卖','配件']
    }, {
      path: 'collect',
      name: '我的收藏夹',
      icon: 'save',
      lists: ['我收藏的配件']
    }, {
      path: 'setting',
      name: '个人设置',
      icon: 'shouhou',
      lists: ['编辑个人资料', '地址管理', '安全设置'],
      children: [
        { path: 'info' },
        { path: 'address' },
        { path: 'safe' }
      ]
    }, {
      path: 'feedback',
      name: '意见反馈',
      icon: 'post',
      lists: ['意见反馈']
    }, ]

export default tab
