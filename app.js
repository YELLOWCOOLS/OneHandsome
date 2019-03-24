//app.js
App({
  onLaunch: function () {
    var temp = [
      // {
      //   "name":"EUR",
      //   "country":"欧洲",
      //   "rate": 0.0,
      //   "amount": 0.0,
      //   "en": "Euro",
      //   "cn": "欧元",
      //   "jp": "ユーロ",
      //   "ko": "유로"
      // }, 
      // {
      //     "name": "HKD",
      //     "country":"香港",
      //     "rate": 0.0,
      //     "amount": 0.0,
      //     "en": "Hong Kong Dollar",
      //     "cn": "港元",
      //     "jp": "香港ドル",
      //     "ko": "홍콩 달러"
      //   }
      ]
      wx.setStorage({
        key: "mySelectCurs",
        data: temp
      }),

        wx.setStorage({
          key: "myMainCur",
          data: {
            "name": "CNY",
            "country": "中国",
            "rate": 0.0,
            "amount": 100.0,
            "en": "RMB",
            "cn": "人民币",
            "jp": "香港ドル",
            "ko": "홍콩 달러"
          }
        })
    },
    getUserInfo: function (cb) {
      var that = this
      if (this.globalData.userInfo) {
        typeof cb == "function" && cb(this.globalData.userInfo)
      } else {
        //调用登录接口
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        })
      }
    },
  globalData: {
    userInfo: null
  }
})