import request from '../request'
import { isEmpty } from "@/utils/tools.js"
import Qs from 'qs';
// let Base64 = require('js-base64').Base64;

// 移除文件
export function PlatformData () {
	return request({
		url: '/IDAP/dataScreen/jdh/transactionInfo',
		method: 'get',
	})
}

// 期限
export function getLoanTerm (options) {
	let isdate = isEmpty(options.isdate)
	let tedate = isEmpty(options.tedate)
	return request({
		url: 'XXX',
		method: 'get',
		params: {
			isdate,
			tedate,
		}
	})
}

// 上传文件
export function uploadFilePost (file) {
	let data = {
		file
	};
	return request({
		url: 'XXX',
		method: 'post',
		data,
		transformRequest: [data => Qs.stringify(data)]
	})
}

//  修改
// export function singelEdit (json) {
//   let jsonData = JSON.stringify(json);
//   let tempJSon = Base64.encode(jsonData);
//   // console.log('新增的参数',jsonData);
//   let data = {
//     json: tempJSon,
//   };
//   return request({
//     url: 'XXX',
//     method: 'post',
//     data,
//     transformRequest: [data => Qs.stringify(data)]
//   })
// }
