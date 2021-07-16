const SYSTEM_APPID = process.env.VUE_APP_SYSTEM_APPID
const OAUTH_URL = process.env.VUE_APP_OAUTH_URL

import Compressor from 'compressorjs'
import html2canvas from 'html2canvas'

/**
 * 跳转登录页
 * @returns {null}
 */
export function goLoginPage() {
	window.location.href = OAUTH_URL + '?appID=' + SYSTEM_APPID + '&redirectUri=' + encodeURIComponent(window.location.origin) + '&responseType=code&state='
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
	if (!time || arguments.length === 0) {
		return null
	}
	const format = cFormat || '{y}-{m}-{d} {h}:{i}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
			time = parseInt(time)
		}
		if ((typeof time === 'number') && (time.toString().length === 10)) {
			time = time * 1000
		}
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
		const value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') {
			return ['日', '一', '二', '三', '四', '五', '六'][value]
		}
		return value.toString().padStart(2, '0')
	})
	return time_str
}

/**
 * Parse the time to string
 * 当前时间的年月日 、月初、月底的年月日
 * @returns {string | null}
 */
export function currentTime() {
	let time = new Date()
	return parseTime(time, '{y}-{m}-{d}')
}
export function monthStart() {
	var time = new Date()
	time.setDate(1)
	return parseTime(time, '{y}-{m}-{d}')
}
export function monthEnd() {
	let end_date = new Date()
	let yy = end_date.getFullYear()
	let mm = end_date.getMonth() + 1
	return parseTime(new Date(yy, mm, 0), '{y}-{m}-{d}')
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
	if (('' + time).length === 10) {
		time = parseInt(time) * 1000
	} else {
		time = +time
	}
	const d = new Date(time)
	const now = Date.now()

	const diff = (now - d) / 1000

	if (diff < 30) {
		return '刚刚'
	} else if (diff < 3600) {
		// less 1 hour
		return Math.ceil(diff / 60) + '分钟前'
	} else if (diff < 3600 * 24) {
		return Math.ceil(diff / 3600) + '小时前'
	} else if (diff < 3600 * 24 * 2) {
		return '1天前'
	}
	if (option) {
		return parseTime(time, option)
	} else {
		return (
			d.getMonth() +
			1 +
			'月' +
			d.getDate() +
			'日' +
			d.getHours() +
			'时' +
			d.getMinutes() +
			'分'
		)
	}
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse(
		'{"' +
		decodeURIComponent(search)
		.replace(/"/g, '\\"')
		.replace(/&/g, '","')
		.replace(/=/g, '":"')
		.replace(/\+/g, ' ') +
		'"}'
	)
}

/**
 * 截取模板字符串中的${}
 * @param {string} 模板字符串
 * @returns {Array}
 */
export function getTemplateParams(str) {
	var reg = /\$\{(.+?)\}/g
	var list = []
	var result = null
	do {
		result = reg.exec(str)
		result && list.push(result[1])
	} while (result)
	return list
}

/**
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
export function isPhoneNum(str) {
	return /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|18[0-9]|19[0-9]|17[0-9])([0-9]{8})$/.test(str)
}

/**
 * @desc   截取时间字符串 0  10
 * @param  {String} str "2021-03-05 23:59:59"
 * @return {String} "2021-03-05"
 */
export function timeSplice(value) {
	return value.substr(0, 10)
}

/**
 * @desc   截取执行时间字符串 5, 11
 * @param  {String} str  "2021-03-05 23:59:59"
 * @return {String}  "03-05 23:59"
 */
export function executetTimeSplice(value) {
	return value.substr(5, 11)
}


/**
 * @desc   1,2,3 转 一二三 支持两位以内 99
 * @param  1,2,3
 * @return  一二三
 */
export function numberToUpperCase(textIndex) {
	let newString = ''
	let newTextIndex = (textIndex + 1) + ''

	function sum(value, index) {
		var newValue = ''
		if ((textIndex === 9)) {
			return !index ? '十' : ''
		}
		let isSeat = (~~textIndex > 9 && ~~textIndex < 19)
		switch (~~value) {
			case 1:
				newValue = !index ? (isSeat ? '' : '一') : '十一'
				break
			case 2:
				newValue = !index ? (isSeat ? '' : '二') : '十二'
				break
			case 3:
				newValue = !index ? (isSeat ? '' : '三') : '十三'
				break
			case 4:
				newValue = !index ? (isSeat ? '' : '四') : '十四'
				break
			case 5:
				newValue = !index ? (isSeat ? '' : '五') : '十五'
				break
			case 6:
				newValue = !index ? (isSeat ? '' : '六') : '十六'
				break
			case 7:
				newValue = !index ? (isSeat ? '' : '七') : '十七'
				break
			case 8:
				newValue = !index ? (isSeat ? '' : '八') : '十八'
				break
			case 9:
				newValue = !index ? (isSeat ? '' : '九') : '九十'
				break
			case 0:
				newValue = '十'
				break
			default:
				break
		}
		return newValue
	}
	for (let i = 0; i < newTextIndex.length; i++) {
		newString += sum(newTextIndex.substring(i, i + 1), i)
	}
	return newString
}


/**
 * @desc   封装对象转为字符串函数
 * @param  对象obj
 * @return id=1&name=fqniu&age=25&workName=frontEnd
 */
export function objUrlStr(obj) {
	// 定义一个空的字符串
	let newStr = ''
	// 遍历对象里面的数据
	for (let key in obj) {
		newStr += key + '=' + obj[key] + '&'
	}
	// 记得去掉最后一个 &
	newStr = newStr.substr(0, newStr.length - 1)
	return newStr
}


/**
 * 添加水印
 * @param {blob} file
 * @param {string} el
 * @returns {Promise}
 */
export async function addWaterMarker(file, el = '#markImg') {
	return new Promise(async (resolve, reject) => {
		try {
			const maxWidth = 750
			const img = await blobToImg(file)
			const imgWidth = img.naturalWidth > maxWidth ? maxWidth : img.naturalWidth
			// 生成水印图片
			const markEle = document.querySelector(el)
			const scale = imgWidth * 0.25 / markEle.clientWidth
			// 先缩放水印再转成图片
			markEle.style.transform = `scale(${scale})`
			const markImg = await htmlToCanvas(markEle)
			// 压缩和旋转图片
			file = await compressor(file, (context, canvas) => {
				// 填充水印
				context.drawImage(markImg, canvas.width - markImg.width - 15 * scale, canvas.height - markImg.height - 15 * scale, markImg.width, markImg.height)
			}, maxWidth)
			resolve(file)
		} catch (error) {
			reject(error)
		}
	})
}

function blobToImg(blob) {
	return new Promise((resolve, reject) => {
		try {
			let reader = new FileReader()
			reader.addEventListener('load', () => {
				let img = new Image()
				img.src = reader.result
				img.addEventListener('load', () => resolve(img))
			})
			reader.readAsDataURL(blob)
		} catch (error) {
			reject(error)
		}
	})
}

export function htmlToCanvas(el, backgroundColor = 'rgba(0,0,0,.1)') {
	return new Promise(async (resolve, reject) => {
		try {
			const markImg = await html2canvas(el, {
				scale: 2, //此处不使用默认值window.devicePixelRatio，需跟移动端保持一致
				allowTaint: false, //允许污染
				useCORS: true,
				backgroundColor //'transparent'  //背景色
			})
			resolve(markImg)
		} catch (error) {
			reject(error)
		}
	})
}

/**
 * 压缩和旋转图片
 * @param {blob} file
 * @param {number} quality  压缩比例
 * @param {number} maxWidth
 * @returns {Promise}
 */
export function compressor(file, drew, maxWidth = 750, quality = 0.6) {
	return new Promise(resolve => {
		new Compressor(file, {
			strict: false,
			maxWidth,
			quality,
			drew,
			success: resolve,
			error(err) {
				console.log(err.message)
			}
		})
	})
}

/**
 * @desc  防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(method, wait, immediate) {
	let timeout
	return function (...args) {
		let context = this
		if (timeout) {
			clearTimeout(timeout)
		}
		// 立即执行需要两个条件，一是immediate为true，二是timeout未被赋值或被置为null
		if (immediate) {
			// 如果定时器不存在，则立即执行，并设置一个定时器，wait毫秒后将定时器置为null
			// 这样确保立即执行后wait毫秒内不会被再次触发
			let callNow = !timeout
			timeout = setTimeout(() => {
				timeout = null
			}, wait)
			if (callNow) {
				method.apply(context, args)
			}
		} else {
			// 如果immediate为false，则函数wait毫秒后执行
			timeout = setTimeout(() => {
				// args是一个类数组对象，所以使用fn.apply
				// 也可写作method.call(context, ...args)
				method.apply(context, args)
			}, wait)
		}
	}
}
