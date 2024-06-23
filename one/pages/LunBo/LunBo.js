// pages/LunBo/LunBo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: [
      "../index/img/1.jpg",
      "../index/img/2.jpg",
      "../index/img/3.jpg",
      "../index/img/4.jpg",
      "../index/img/5.jpg",
      "../index/img/6.jpg",
      "../index/img/7.jpg",
      "../index/img/8.jpg",
      "../index/img/9.jpg",
      "../index/img/10.jpg",
      "../index/img/11.jpg",
      "../index/img/12.jpg"
    ],
    QQ_name: "",
    QQ_sex: "",
    QQ_age: "",
    QQ_area: "",
    QQ_text: ""
  },

  /**
   * 生命周期函数--监听页面加载
   * dec:它在页面加载时触发。具体来说，当页面第一次被加载或重新进入时，会执行该函数。这通常是你初始化页面数据、请求远程数据或做其他准备工作的重要时机。
   */
  onLoad(options) {
    // 测试本地接口
    wx.request({
      url: "http://localhost/%e4%bb%a3%e7%a0%81%e6%8e%a5%e5%8f%a3/cs.php",
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        if (res.statusCode === 200) {
          console.log(res.data)
        } else {
          this.setData({
            error: `请求失败，状态码：${res.statusCode}`
          });
        }
      },
      fail: (err) => {
        this.setData({
          error: `请求失败：${err.errMsg}`
        });
      }
    });



  },
  changeQQ(e) {
    console.log("输入的QQ：" + e.detail.value)
    this.setData({
      QQ_text: e.detail.value
    })
  },
  getInformatioin() {
    if (this.data.QQ_text === "") {
      //弹窗
      wx.showToast({
        title: '请填写QQ号再尝试！', //提示的内容
        duration: 1000, //持续的时间
        icon: 'error', //图标有success、error、loading、none四种
        mask: true //显示透明蒙层 防止触摸穿透
      })
      return;
    }

    const url = 'https://api.oioweb.cn/api/qq/info?qq=' + this.data.QQ_text; // 替换为你的接口地址
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        if (res.statusCode === 200) {
          console.log(res.data)
          //弹窗
          wx.showToast({
            title: '查询成功！', //提示的内容
            duration: 1000, //持续的时间
            icon: 'success', //图标有success、error、loading、none四种
            mask: true //显示透明蒙层 防止触摸穿透
          })

          let result = res.data.result;
          this.setData({
            QQ_name: result.nickname,
            QQ_sex: result.sex,
            QQ_age: result.age,
            QQ_area: result.area,
          });
        } else {
          this.setData({
            error: `请求失败，状态码：${res.statusCode}`
          });
        }
      },
      fail: (err) => {
        this.setData({
          error: `请求失败：${err.errMsg}`
        });
      }
    });

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})