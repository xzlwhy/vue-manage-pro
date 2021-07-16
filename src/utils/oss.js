const OSS = require('ali-oss')

const OSSConfig = {
  uploadHost: 'https://xxxxxx.oss-cn-shenzhen.aliyuncs.com', //OSS上传地址
  folder: process.env.VUE_APP_OSS_FOLDER,
  ossParams: {
    region: 'oss-cn-shenzhen',
    success_action_status: '200', // 默认200
    accessKeyId: '',
    accessKeySecret: '',
    bucket: 'xxxx',
  },
}

function random_string(len) {
  len = len || 32
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  var maxPos = chars.length
  var pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

function uploadOSS(file) {
  return new Promise(async (resolve, reject) => {
    const fileName = `${OSSConfig.folder}${random_string(6)}_${file.name}`
    let client = new OSS({
      region: OSSConfig.ossParams.region,
      accessKeyId: OSSConfig.ossParams.accessKeyId,
      accessKeySecret: OSSConfig.ossParams.accessKeySecret,
      bucket: OSSConfig.ossParams.bucket,
    })
    const res = await client.multipartUpload(fileName, file)
    if (res.name) {
      resolve({
        fileName: file.name,
        url: `${OSSConfig.uploadHost}/${fileName}`
      })
    } else {
      reject('OSS上传失败')
    }
  })
}

export { uploadOSS }
