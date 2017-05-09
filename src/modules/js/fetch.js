import axios from 'axios'

let host = require('./host-config.js').host

// 开发环节，所有接口走rap数据
function rap(urlList) {
  let obj = {}
  Object.keys(urlList).forEach(key => {
    obj[key] = host + urlList[key]
  })
  return obj
}

function fetch(url, data = null) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then((response) => {
      let result = response.data
      if (result.status === 200) {
        resolve(result)
      } else if (result.status === 300) {
        // 未登录的处理
      } else {
        reject(result)
      }
    }).catch((error) => {
      reject({
        status: -1,
        message: '系统错误，请稍后重试'
      })
    })
  })
}


export {
  rap,
  fetch
}
