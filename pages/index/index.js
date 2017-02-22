//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '我的汪星人',
    dogs: [
      {
        id: 1,
        name: 'hanny'
      },
      {
        id: 2,
        name: 'wangcai'
      },
      {
        id: 3,
        name: 'lough'
      }
    ],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //清除日志
  bindLogTap: function() {
    wx.setStorageSync('logs', [])
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    
    /**
     * 调用https请求，发送用户信息给服务器
     */
  }
})
