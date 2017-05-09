import { fetch,rap } from 'js/fetch.js'

let url = {
  addresslist: '/address/lists.do',
  add: '/address/add.do',
  update: '/address/update.do',
  delete: '/address/delete.do',
  setDefault: '/address/setDefault.do',
  province: '/province/list.do',
  city: '/city/list.do',
  district: '/district/list.do'
}
url = rap(url)

class address{
    static addresslist(data){
        return fetch(url.addresslist)
    }
    static add(data){
        return fetch(url.add)
    } 
    static update(data){
        return fetch(url.update)
    } 
    static delete(data){
        return fetch(url.delete)
    } 
    static setDefault(data){
        return fetch(url.setDefault)
    } 
    static province(data){
        return fetch(url.province)
    } 
    static city(data){
        return fetch(url.city)
    } 
    static district(data){
        return fetch(url.district)
    }  
}

export default address