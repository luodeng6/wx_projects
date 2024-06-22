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
    isShowWarn:false,
    YouAge:0,
  },
  usernameChange(event) {
    console.log('输入用户名：', );
    this.setData({
      username_text: event.detail.value
    });
  },

  addAge(){
    

    this.setData({
      YouAge:this.data.YouAge+1,
      isShowWarn:false
    })
  },
  lowAge(){
    if (this.data.YouAge==0) {
      this.setData({
        isShowWarn:true
      })
      setTimeout(()=>{
        this.setData({
          isShowWarn:false
        })
      },3000)
    }else{
       this.setData({
      YouAge:this.data.YouAge-1
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

  onPause(event) {
    console.log('视频暂停', event);
  },

  onEnded(event) {
    console.log('视频播放结束', event);
  },

  onTimeUpdate(event) {
    console.log('播放时间更新', event.detail.currentTime);
  },

  onError(event) {
    console.error('视频播放出错', event);
  }
});