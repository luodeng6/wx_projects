Page({
  data: {
    username: "",
    password: ""
  },

  login() {
    // 在这里处理登录逻辑，例如发送请求验证用户名和密码
    let that = this;
    console.log("登录内容:")
    console.log(that.data.username)
    console.log(that.data.password)

    //调用登录接口:
    wx.request({
      url: 'http://localhost:8080/account/logindo4',
      method: 'POST',
      data: {
        username: that.data.username,
        password: that.data.password
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        if (res.data.result) {
          // 如果登录成功，处理后续逻辑，例如跳转页面等
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000,
            success: () => {
              setTimeout(() => {
                
                //设置用户名
                const app = getApp();
                app.globalData.username = that.data.username;

                // 登录成功后跳转到首页或其他页面
                wx.switchTab({
                  url: '/pages/index/index?username=' + that.data.username,
                })

              }, 2000)
            }
          });
        } else {
          wx.showToast({
            title: "密码或用户名错误！",
            icon: 'error',
            duration: 2000,
          });
        }
      },
      fail(err) {
        console.log(err);
        // 处理请求失败的情况
        wx.showToast({
          title: '登录失败，请重试',
          icon: 'none',
          duration: 2000
        });
      }

    });
  },


  passwordChange(e) {
    this.setData({
      password: e.detail.value
    })
  },
  usernameChange(e) {
    this.setData({
      username: e.detail.value
    })
  }
});