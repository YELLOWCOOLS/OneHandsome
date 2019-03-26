// pages/tax/tax.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:0,
    kou_money:0,
    num : 0,
    all_money:0,
    all_kou_money:0,
    all_tax:0,
    month_money:[]
  },
  resetmoney: function (e) {
    this.setData({
      money: e.detail.value
    })
  },
  resetkou_money:function(e){
    this.setData({
      kou_money: e.detail.value
    })
  },
  get_curent_tax:function(){
    console.log("all_money       "+this.data.all_money);
    console.log("all_kou_money        "+this.data.all_kou_money);
    console.log("data.num         "+this.data.num);


    var money =   this.data.all_money-this.data.all_kou_money-5000*this.data.num;
    var ins = 0;
    console.log("money        "+money);

    if (money<=0){
      
      return 0;
    }else if(money<=36000){
      ins = money*0.03;
    }else if(money<=144000){
      ins = money*0.1-2520;
    }else if(money<=300000){
      ins = money*0.2-16920;
    }else if(money<=420000){
      ins = money*0.25-31920;
    } else if (money<=660000){
      ins = money*0.3-52920;
    }else if(money<=960000){
      ins = money*0.35-85920;
    }else{
      ins = money*0.45-181920;
    }
    console.log("ins1        " + ins);
    ins = ins - this.data.all_tax;
    console.log("ins1        " + ins);
    ins = ins.toFixed(2);
    console.log("ins2        " + ins);
    var all_tax = Number(this.data.all_tax)+Number(ins);
    console.log("all        " + all_tax);
    this.setData({
      all_tax :all_tax
    })
    return ins;
  },
  deleteAll:function(){
    this.setData({
      num:0,
      all_money:0,
      all_kou_money:0,
      all_tax:0,
      money:0,
      kou_money:0,
      month_money:[]
    })
  },
  addNewMonth:function(){
    var kou_money = Number(this.data.kou_money);
    var all_kou_money = Number(this.data.all_kou_money);
  
    var money = Number(this.data.money);
    var all_money = Number(this.data.all_money);
    all_money = all_money+money;
    all_kou_money = all_kou_money+kou_money;
    var num = Number(this.data.num);
    num = num +1;
    
    this.setData({
      num: num,
      all_money: all_money,
      all_kou_money: all_kou_money
    })
    var data = {
      money:this.data.money,
      kou_money:this.data.kou_money,
      tax:this.get_curent_tax(),
      num : this.data.num
    }
    
    var datas = this.data.month_money;
    datas.push(data);
    this.setData({
      month_money: datas
    })
    
    
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