global.user = {
  address: '中国北京'
};

function buy() {
  var shopCur = this.getShopCur();
  var userInfo = this.getUserInfo();
  var total = shopCur.total;
  var count = shopCur.count;
  var carriage = total < 100 ? count * 5 : 0;
  var address = userInfo.address;

  try{
    var payInfo = this.pay(total, count, carriage);
    var result = this.order(payInfo.id, address);
    if(result.payment!=='success') throw new Error('下单失败')
    console.log(result)
  } catch (e) {
    throw new Error(e);
  }
}

/* mock */
buy.prototype.getShopCur = () => ({ total: 350 })

buy.prototype.getUserInfo = () => global.user;
/* mock end */

buy.prototype.pay = (total, count, carriage) => ({ id: 1111 });

buy.prototype.order = payId => ({ payment: 'success' });

var b = new buy();