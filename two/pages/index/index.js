Page({
  data: {
    username:""
  },
  onLoad: function () {
    // 在需要获取的页面中
    const app = getApp();
    console.log(app.globalData.username);

    this.setData({
      username:app.globalData.username
    })

    wx.showToast({
      title: '欢迎用户:'+this.data.username,
      duration: 2000,
      success: () => {
          //执行加载数据操作
      }
    });
  },
  checklogin() {
    wx.request({
      url: 'http://localhost:8080/account/checkSession',
      method: 'GET',
      success(res) {
        console.log(res.data);

        //弹窗
        wx.showToast({
          title: "你好", //提示的内容
          duration: 1000, //持续的时间
          icon: 'success', //图标有success、error、loading、none四种
          mask: true //显示透明蒙层 防止触摸穿透
        })


      }
    })
  }


})