//obj-register.js
var util = require('../../utils/util.js')

Page({
  data: {
    dogTypeArray: ['金毛', '柯基', '哈士奇', '杜宾','泰迪'],
    dogTypeIndex: 0,
    objName: 'dog',
    objBirthday: '',
    objWeight: ''
  },
  onLoad: function () {
    console.log('register page onLoad')
    this.setData({
      objBirthday: util.formatDate(new Date(Date.now()))
    })
  },

  bindNameInput: function(e) {
    this.setData({
      objName: e.detail.value
    })
  },

  bindDateChange: function(e) {
    this.setData({
      objBirthday: e.detail.value
    })
  },
/*
  bindWeightChange: function(e) {
    const val = e.detail.value
    this.setData({
      integer: this.data.integers[val[0]],
      decimal: this.data.decimals[val[1]],
    })
  },*/

  bindTypeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      name: 'click submit'
    })
  },

  formReset: function() {
    console.log('form发生了reset事件')
  }
})