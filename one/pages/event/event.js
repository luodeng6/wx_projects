// pages/index/index.js
Page({
  data: {
    autoplay: false,
    loop: false,
    muted: false,
    initialTime: 0,
    duration: 60,
    danmuBtn: false,
    danmuList: [],
    enableDanmu: false,
    showFullscreenBtn: true,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    enableProgressGesture: true,
    objectFit: 'contain',

    //我的属性
    button1_text: "播放",
    button2_text: "暂停",
    username_text: "",
    isShowWarn: false,
    YouAge: 0,

    //表格
    // 表格标题
    th: ['id', '学生姓名', '地区码', '学号', '性别', '出生日期', '政治面貌', '民族', '学习形式', '院系名称', '年级', '班级', '学制', '入学日期'],
    // 表格内容  这里只能使用 数组套数组格式
    td: [],
    ishide_th:true
  },
  usernameChange(event) {
    console.log('输入用户名：', );
    this.setData({
      username_text: event.detail.value
    });
  },

  addAge() {
    this.setData({
      YouAge: this.data.YouAge + 1,
      isShowWarn: false
    })
  },
  
  lowAge() {
    if (this.data.YouAge == 0) {
      this.setData({
        isShowWarn: true
      })
      setTimeout(() => {
        this.setData({
          isShowWarn: false
        })
      }, 3000)
    } else {
      this.setData({
        YouAge: this.data.YouAge - 1
      })
    }
  },

  onPlay(event) {
    console.log('视频开始播放', event);
    console.log(event._relatedInfo.anchorTargetText)
  },

  playtheVideo() {
    // 获取视频上下文
    this.videoContext = wx.createVideoContext('myVideo');
    this.videoContext.play();
    this.setData({
      button1_text: '已播放'
    });
    setTimeout(() => {
      this.setData({
        button1_text: '播放'
      });
    }, 2000)
  },

  pausetheVideo() {
    // 获取视频上下文
    this.videoContext = wx.createVideoContext('myVideo');
    this.videoContext.pause();
    this.setData({
      button2_text: '已暂停'
    });
    setTimeout(() => {
      this.setData({
        button2_text: '暂停'
      });
    }, 2000)
  },

  // 视频暂停会触发的事
  onPause(event) {
    console.log('视频暂停', event);
  },
  //视频结束会发生的事
  onEnded(event) {
    console.log('视频播放结束', event);
  },

  onTimeUpdate(event) {
    console.log('播放时间更新', event.detail.currentTime);
  },

  onError(event) {
    console.error('视频播放出错', event);
  },
  onLoad() {

  },
  transformArray(objects) {
    return objects.map(obj => Object.values(obj));
  },

  /**
   * 根据指定位置对二维数组进行排序
   * @param {Array} array - 需要排序的二维数组
   * @param {number} index - 指定的位置索引
   * @param {boolean} [ascending=true] - 是否按升序排序，默认升序
   * @returns {Array} 排序后的二维数组
   */
  sort2DArrayByIndex(array, index, ascending = true) {
    return array.sort((a, b) => {
      if (ascending) {
        return a[index] - b[index];
      } else {
        return b[index] - a[index];
      }
    });
  },

  cs() {
    let that = this;
    wx.request({
      url: 'http://localhost:8080/student/getSomeStuDataBystudentId?stuId=' + this.data.username_text,
      method: 'GET',
      success(res) {
        console.log(res.data);

        //弹窗
        wx.showToast({
          title: `一共 ${res.data.size} 个结果`, //提示的内容
          duration: 1000, //持续的时间
          icon: 'success', //图标有success、error、loading、none四种
          mask: true //显示透明蒙层 防止触摸穿透
        })

        // 列表对象转 二维数组->符合td的格式
        let two_list= that.transformArray(res.data.data)
        console.log(two_list)
        // 修整数据->根据学号排序
        that.setData({
          ishide_th:false,
          td: that.sort2DArrayByIndex(two_list,3)
        })
      }
    })




  }
});