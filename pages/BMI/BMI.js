// pages/BMI/BMI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    weight: 0,
    result: 0,
    boolean: false,
    status: "正常",
    listData:[
      {
        min:-1,
        max:16.4,
        resultData:"极瘦",
      },
      {
        min: 16.5,
        max: 18.4,
        resultData: "偏瘦",
      },
      {
        min: 18.5,
        max: 24.9,
        resultData: "正常",
      },
      {
        min: 25.0,
        max: 29.9,
        resultData: "过重",
      },
      {
        min: 30.0,
        max: 34.9,
        resultData: "Ⅰ类肥胖",
      },
      {
        min: 35.0,
        max: 39.9,
        resultData: "Ⅱ类肥胖",
      },
      {
        min: 40.0,
        max: 1,
        resultData: "Ⅲ类肥胖",
      }
    ]
  },

  /**
 * 监听身高输入
 */
  listenerHeightInput: function (e) {
    this.data.height = e.detail.value/100;

  },

  /**
   * 监听体重 输入
   */
  listenerWeightInput: function (e) {
    this.data.weight = e.detail.value;
  },

  /**
   * 监听计算按钮
   */
  listenerCal: function () {
    //打印身高和体重
    console.log('身高为: ', this.data.height);
    console.log('体重为: ', this.data.weight);

    var BMI = this.data.weight / (this.data.height * this.data.height)
    this.setData({ result: BMI.toFixed(1) })
    if (this.data.weight > 0 && this.data.height>0)
    {
      this.setData({ boolean: true })
    }
    //判断身体状况
    if(this.data.result<=16.4)
    {
      this.setData({ status: "极瘦" })
    }
    else if (this.data.result <= 18.4) {
      this.setData({ status: "偏瘦" })
    }
    else if (this.data.result <= 24.9) {
      this.setData({ status: "正常" })
    }
    else if (this.data.result <= 29.9) {
      this.setData({ status: "过重" })
    }
    else if (this.data.result <= 34.9) {
      this.setData({ status: "Ⅰ类肥胖" })
    }
    else if (this.data.result <= 40) {
      this.setData({ status: "Ⅱ类肥胖" })
    }
    else{
      this.setData({ status: "Ⅲ类肥胖" })
    }

    console.log('BMI为: ', this.data.result);
  },

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

  }
})