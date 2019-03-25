function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}



function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}

function removeByValue(arr, name) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == name) {
            arr.splice(i, 1);
            break;
        }
    }
}


//浮点数加法运算
function floatAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
}

//浮点数减法运算
function floatSub(arg1,arg2){
    var r1,r2,m,n;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    //动态控制精度长度
    n=(r1=r2)?r1:r2;
    return ((arg1*m-arg2*m)/m).toFixed(n);
}

//浮点数乘法运算
function floatMul(arg1,arg2){
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}


 //浮点数除法运算
function floatDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    r1=Number(arg1.toString().replace(".",""));
    r2=Number(arg2.toString().replace(".",""));
    return (r1/r2)*Math.pow(10,t2-t1);
}
 
Date.isLeapYear = function (year) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};

Date.getDaysInMonth = function (year, month) {
  return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.prototype.isLeapYear = function () {
  return Date.isLeapYear(this.getFullYear());
};

Date.prototype.getDaysInMonth = function () {
  return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
  var newDate = new Date(this.getTime())
  var n = newDate.getDate();
  newDate.setDate(1);
  newDate.setMonth(newDate.getMonth() + value);
  newDate.setDate(Math.min(n, newDate.getDaysInMonth()));
  return newDate;
};

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}年${month}月${day}日`;
}

const truncate = (num, decimal = 2) => {
  var numStr = (num * 1.0).toFixed(decimal + 1);
  return parseFloat(numStr.substr(0, numStr.length - 1));
}

/**
 * 获取当前商业基准利率
 */
const getBusinessBaseRate = year => {
  if (year <= 1) {
    return 4.35;
  } else if (year <= 3) {
    return 4.75;
  } else if (year <= 5) {
    return 4.75;
  } else {
    return 4.90;
  }
}

const businessRateDiscountArr = [0.7, 0.8, 0.83, 0.85, 0.9, 0.95, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.30, 1.35, 1.4];
/**
 * 获取当前商业利率波动
 */
const getBusinessLoanRateArr = year => {
  const baseRate = getBusinessBaseRate(year);
  let loanRateArr = [];
  for (var discount of businessRateDiscountArr) {
    let rateValue = (baseRate * discount).toLocaleString();
    let rateText = '';
    if (discount < 1) {
      rateText = `${discount}折(${rateValue}%)`
    } else if (discount > 1) {
      rateText = `${discount}倍(${rateValue}%)`
    } else {
      rateText = `基准利率(${rateValue}%)`
    }
    loanRateArr.push({
      value: parseFloat(rateValue),
      text: rateText
    });
  }
  return loanRateArr;
}

/**
 * 获取当前公积金基准利率
 */
const getGJJBaseRate = year => {
  if (year <= 5) {
    return 2.75;
  } else {
    return 3.25;
  }
}
const gjjRateDiscountArr = [1, 1.1, 1.2];
/**
 * 获取当前商业利率波动
 */
const getGJJLoanRateArr = year => {
  const baseRate = getGJJBaseRate(year).toLocaleString();
  let loanRateArr = [];
  for (var discount of gjjRateDiscountArr) {
    var rateValue = baseRate * discount;
    let rateText = '';
    if (discount > 1) {
      rateText = `${discount}倍(${rateValue}%)`
    } else if (discount === 1) {
      rateText = `基准利率(${rateValue}%)`
    } else {
      rateText = `${discount}折(${rateValue}%)`
    }
    loanRateArr.push({
      value: parseFloat(rateValue),
      text: rateText
    });
  }
  return loanRateArr;
}

module.exports = {
  json2Form: json2Form,
  formatTime: formatTime,
  removeByValue: removeByValue,
  floatMul:floatMul,
  floatDiv:floatDiv,
  floatSub:floatSub,
  floatAdd:floatAdd,
  formatDate: formatDate,
  truncate: truncate,
  getBusinessLoanRateArr: getBusinessLoanRateArr,
  getGJJLoanRateArr: getGJJLoanRateArr
}
