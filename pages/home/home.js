// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // 初始化数据
      data:{
        message:'哈哈哈',
        list:[]
      }
  },

  // 1.监听页面生命周期
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // ---------------3.监听wxml中的事件

  // ---------------4.其他事件
  // 监听页面滚动
  onPageScroll(obj){

  },

  // 监听页面滚动到顶部
  onReachBottom(){
    console.log("页面滚动到顶部")
  },
  onPullDownRefresh(){
    console.log('下拉刷新事件')
  }

})