import axios from 'axios'

//https://alioss.app-link.org/alucard263096/blog/wangzhanid/
const url = 'http://cmsdev.app-link.org/alucard263096/blog/api'
         //  http://cmsdev.app-link.org/alucard263096/blog/api/news/newsdetail?id=3

export default class request {
  static async getNewsList() { //获取新闻列表
    try {
      const res = await axios.get(url + '/news/newslist') 
      if(res.status === 200 && res.statusText === "OK") {
        // console.log('getNewsList data:', res.data)
        return res.data
      }
      return null
    }catch(e) {
      return null
    }
  }
  static async getThreeNews() { //获取3条新闻
    try {
      const res = await axios.get(url + '/news/threenews')
      if(res.status === 200 && res.statusText === "OK") {
        // console.log('getThreeNews data:', res.data)
        return res.data
      }
      return null
    }catch(e) {
      return null
    }
  }
  static async getNewsDetail(id) { //获取新闻详情
    try {
      const res = await axios.get(url + '/news/newsdetail?id=' + id)
      if(res.status === 200 && res.statusText === "OK") {
        // console.log('getNewsDetail data:', res.data)
        return res.data
      }
      return null
    }catch(e) {
      return null
    }
  }
  static async getResolveList() { //获取方案列表
    try {
      const res = await axios.get(url + '/resolve/resolvelist') 
      if(res.status === 200 && res.statusText === "OK") {
        // console.log('getResolveList data:', res.data)
        return res.data
      }
      return null
    }catch(e) {
      return null
    }
  }
  static async getResolveDetail(id) { //获取方案详情
    try {
      const res = await axios.get(url + '/resolve/resolvedetail?id=' + id)
      if(res.status === 200 && res.statusText === "OK") {
        // console.log('getResolveDetail data:', res.data, id)
        return res.data
      }
      return null
    }catch(e) {
      return null
    }
  }
  static async getWebConfig() { //获取网站配置
    try {
      const res = await axios.get(url + '/web/webconfig')
      if(res.status === 200 && res.statusText === "OK") {
        // console.log('我请求了一次getWebConfig', res.data)
        return res.data
      }
      return null
    }catch(e) {
      return null
    }
  }
  static async getBanner() { //获取bannerList
    try {
      const res = await axios.get(url + '/banner/banner')
      if(res.status === 200 && res.statusText === "OK") {
        // console.log('getBanner', res.data)
        return res.data
      }
      return null
    }catch(e) {
      return null
    }
  }
}