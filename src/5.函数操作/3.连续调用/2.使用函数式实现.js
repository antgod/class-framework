var compose = require('./最终实现');

global.user = {
  address: '中国北京'
};

const order = {
  getUserInfo: () => global.user,
  disposeOrderMessage: ({ total, count }) => {
    var userInfo = order.getUserInfo();
    var carriage = total < 100 ? count * 5 : 0;
    var address = userInfo.address;
    return {total, count, carriage, address}
  },
  pay: ({total, count, carriage, address}) => {
    console.log('购物车信息：', `总价：${total}, 数量：${count}, 运费：${carriage}`);
    return  ({ id: parseInt(Math.random()*1000), address })
  },
  inOrder: ({id, address}) => {
    console.log('下单信息：', `付款ID：${id}, 地址：${address}`);
    return ({ payment: 'success' })
  },
};


function buy(...params) {
  const {disposeOrderMessage, pay, inOrder }  = order
  try{
    var result = compose(disposeOrderMessage, pay, inOrder)(...params);
    if(result.payment!=='success') throw new Error('下单失败');

    console.log('下单成功');
  } catch (e) {
    throw new Error(e);
  }
}

var b = new buy({ total: 350, count: 2 });