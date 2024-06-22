Page({
  data: {
    imagePath: null,
  },

  chooseImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 获取选中的图片路径
        const tempFilePath = res.tempFilePaths[0];
        this.setData({
          imagePath: tempFilePath
        });
      },
      fail: (err) => {
        console.error('选择图片失败：', err);
      }
    });
  },

  uploadImage() {
    if (!this.data.imagePath) {
      wx.showToast({
        title: '请先选择图片',
        icon: 'none'
      });
      return;
    }

    wx.uploadFile({
      url: 'https://api.oioweb.cn/api/ocr', // 上传接口地址
      filePath: this.data.imagePath,
      name: 'file', // 与后台接口对应的参数名
      // formData: {
      //   user: 'test' // 可以添加一些额外的参数
      // },
      success: (res) => {
        // 解析响应
        const data = JSON.parse(res.data);
        console.log(data);

        if (data.success) {
          wx.showToast({
            title: '上传成功',
            icon: 'success'
          });
        } else {
          wx.showToast({
            title: '上传失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        console.error('上传图片失败：', err);
        wx.showToast({
          title: '上传失败',
          icon: 'none'
        });
      }
    });
  }
  ,
  //页面跳转
  goToMovise(){
      wx.navigateTo({
        url: '/pages/movise/movise'
      });
  }


});
