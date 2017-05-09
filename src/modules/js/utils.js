class Utils {

  /**
   * 添加url的query参数
   * @param {string} url url地址
   * @param {Object} data 要增加的参数对象,以键值对的方式存储
   * @return {string} 返回一个拼接好参数的url
   * todo：data的value为数组情况的处理
   */
  static setQuery(url, data) {
    let str = ''
    Object.keys(data).forEach(key => {
      str += `&${key}=${data[key]}`
    })
    let mark = url.indexOf('?') == -1 ? '?' : '&'
    return url + mark + str.substr(1)
  }

  /**
   * 获取url的参数值
   * @param {string} key query的key值，默认值为undefined
   * @return {string|Object} 传递key则返回对应k的value，默认返回所以query转化的object
   */
  static getQuery(key = undefined) {
    let arr = location.search.substr(1).split('&')
    return this.arrToObj(key,arr)
  }

  /*
   * 获取cookie的值
   * @param {string} cname cookie的name
   * @return {string} cookie的value，如果不传cookie的name则返回包含所有name和value的对象
   */
  static getCookie(cname) {
    let arr = document.cookie.split(';')
    return this.arrToObj(cname,arr)
  }


  static arrToObj(key,arr) {
    let data = {}
    arr.forEach((item) => {
      let cur = item.split('=')
      data[cur[0].trim()] = cur[1].trim()
    })
    return key ? data[key] : data
  }
}

export default Utils