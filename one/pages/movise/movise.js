// pages/movise/movise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    mov_area: "",
    mov_director: "",
    mov_intro: "",
    mov_link: "",
    mov_pic: "",
    mov_rating: "",
    mov_text: "",
    mov_title: "",
    mov_type: "",
    mov_year: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    wx.showToast({
      title: '加载中...', //提示的内容
      duration: 1500, //持续的时间
      icon: 'loading', //图标有success、error、loading、none四种
      mask: true //显示透明蒙层 防止触摸穿透
   })

    const url = 'https://api.oioweb.cn/api/common/OneFilm'; //接口地址
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        if (res.statusCode === 200) {
          console.log(res.data)


          let result = res.data.result;
          this.setData({
            /*
            date	number	当前数据日期
             mov_area	string	电影地区
             mov_director	string	导演
             mov_intro	string	电影描述
             mov_link	string	豆瓣链接
             mov_pic	string	电影封面
             mov_rating	number	电影评分
             mov_text	string	电影描述
             mov_title	string	电影名称
             mov_type	object	电影类型
             mov_year
            */
            date: result.data,
            mov_area: result.mov_area,
            mov_director: result.mov_director,
            mov_intro: result.mov_intro,
            mov_link: result.mov_link,
            mov_pic: result.mov_pic,
            mov_rating: result.mov_rating,
            mov_text: result.mov_text,
            mov_title: result.mov_title,
            mov_type: result.mov_type,
            mov_year: result.mov_year
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