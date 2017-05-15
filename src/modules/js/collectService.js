import {fetch,rap} from 'js/fetch.js'

let url = {
  cancel: '/collect/cancel.do',
  add: '/collect/add.do',
  detail: '/product/detail.do',
  lists: '/collect/lists.do'
}
url = rap(url)

class collect{
	static cancel(data){
		return fetch(url.cancel, data)
	} 
	static add(data){
		return fetch(url.add, data)
	}
	static detail(data){
		return fetch(url.detail, data)
	}
    static lists(data){
        return fetch(url.lists, data)
    }
	
}

export default collect