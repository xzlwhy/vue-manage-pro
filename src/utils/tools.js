/**
 *
 * @returns 格式时间 20210501 -> 2021-05-01
 */
const time_format = (time) => {
  let res;
  if (time && String(time).length === 8) {
    let y = String(time).substr(0, 4);
    let m = String(time).substr(4, 2);
    let d = String(time).substr(6, 2);
    res = y + "-" + m + "-" + d;
  } else {
    res = "";
  }
  return res;
}


const money_format = (number, decimals = 2, dec_point = ".", thousands_sep = ",") => {
  /*
   * 参数说明：
   * number：要格式化的数字
   * decimals：保留几位小数
   * dec_point：小数点符号
   * thousands_sep：千分位符号
   * */
  number = (number + "").replace(/[^0-9+-Ee.]/g, "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.ceil(n * k) / k;
    };

  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }

  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

// 深拷贝函数
const deepCopy = (newobj, oldobj) => {
  for (let k in oldobj) {
    //先判断第一层的属性值属于那种数据类型 先判断是否为数组，然后判断是否为对象,最后判断是否属于简单数据类型
    let item = oldobj[k]; //属性值
    if (item instanceof Array) { //先判断是否为数组（因为数组也是属于对象，所以先判断）
      newobj[k] = []; //先创建一个空数组，用于存放数据
      deepCopy(newobj[k], item); //把item拷贝到newobj[k]
    } else if (item instanceof Object) {
      newobj[k] = {};
      deepCopy(newobj[k], item);
    } else {
      newobj[k] = item;
    }
  }
}

/* 判断去空处理 */
const isEmpty = (val) => {
  if ( val === '' || val == null || undefined ) {
    return ''
  } else {
    return val;
  }
}

/**
 * 下拉菜单 对象属性的转化
 * @param {*} item
 */
 const selectChange = (item) => {
  let newArr = [];
  if (item instanceof Array) {
    item.map((items) => {
      newArr.push({
        value: items.code,
        label: items.name,
      });
    });
  }
  // console.log("newArr", newArr);
  return newArr
}

/**
 * 把拿到的 CNY等值 转换为 人民币 等！ 币种的 英文 转化为中文！
 * @param {*} val 所需要匹配的值
 * @returns
 */
 const CurrencyNumToStr = (val) => {
  let res;
  switch (val) {
    case 'CNY':
      res = "人民币";
      break;
    case 'USD':
      res = "美元";
      break;
  }
  return res;
}

export {
  money_format,
  time_format,
  deepCopy,
	isEmpty,
	selectChange,
	CurrencyNumToStr
}
