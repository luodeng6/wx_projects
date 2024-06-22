Page({
  data: {
    name: "碧梨(billie Eilish)",
    imglist: [{
      'url': 'img/1.jpg',
      'title': '晨光中的微笑'
    }, {
      'url': 'img/2.jpg',
      'title': '湖畔的清新美人'
    }, {
      'url': 'img/3.jpg',
      'title': '夕阳下的迷人侧影'
    }, {
      'url': 'img/4.jpg',
      'title': '樱花树下的优雅倩影'
    }, {
      'url': 'img/5.jpg',
      'title': '田野间的纯净少女'
    }, {
      'url': 'img/6.jpg',
      'title': '海滩上的阳光天使'
    }, {
      'url': 'img/7.jpg',
      'title': '古典庭院中的温婉女子'
    }, {
      'url': 'img/8.jpg',
      'title': '城市夜景中的时尚女郎'
    }, {
      'url': 'img/9.jpg',
      'title': '自然光下的无瑕之美'
    }, {
      'url': 'img/10.jpg',
      'title': '雨中漫步的优雅丽人'
    }, {
      'url': 'img/11.jpg',
      'title': '山间小径的清秀佳人'
    }, {
      'url': 'img/12.jpg',
      'title': '秋日午后的温柔目光'
    }],
    isshow_list: [false, false, false, false, false, false, false, false, false, false, false, false]
  },
  getImg(event) {
    // dataset是一个对象，包含了所有data-* 传来的参数项
    console.log(event.target.dataset.info)
    wx.showModal({
      title: '提示',
      content: "您单击的是: 《" + this.data.imglist[event.target.dataset.info].title + "》",
      showCancel: true, // 是否显示取消按钮
      confirmText: '确定' // 确认按钮的文字
    });
  },
  getTitle(event) {
    // 获取参数
    let url = event.target.dataset.url;
    let index = event.target.dataset.index;
    // 复制一份 isshow_list 数组
    let isshow_list = this.data.isshow_list.slice();
    // 修改对应索引的值
    isshow_list[index] = !isshow_list[index];
    // 更新页面数据
    this.setData({
      isshow_list: isshow_list
    });
  }

})