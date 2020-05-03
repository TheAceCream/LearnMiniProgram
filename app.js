App({
  // 生命周期函数 ： 后台存活5分钟
  // 小程序初始化完成的时候，会执行的生命周期函数
  onLaunch: function() {
    
    console.log('小程序初始化完成了：onLaunch')
    // 异步调用 -> 数据拿到之后再进行回调
    wx.getUserInfo({
      success: function(res){
          console.log(res)
      }
    })

  },
  // 小程序界面显示出来之后，会执行的生命周期函数
  onShow: function() {
    console.log('界面显示出来：onShow')
  },
  // 界面被隐藏的时候，会执行
  onHide: function() {
    console.log('界面被隐藏：onHide')
  },
  // 报错的时候会执行
  onError: function() {
    console.log('报错：onError')
  }
})