import {fetch,rap} from 'js/fetch.js'

let url = {
  info: '/user/getUser.do',
  logout: '/user/logout.do',
  login : '/user/login.do',
  registe: '/user/register.do',
  getCode: '/user/getCode.do',
  resetPwd: '/user/resetPwd',
  getCodeForForget: '/user/getCodeForForget',
  headImg: '/personal/headImg.do',
  feedback: '/feedback/code.do'
}
url = rap(url)

class user{
	static getInfo(data){
		return fetch(url.info)
	} 
	static logout(data){
		return fetch(url.logout)
	}
	static login(data){
		return fetch(url.login, data)
	}
	static registe(data){
		return fetch(url.registe, data)
	}
	static getCode(data){
		return fetch(url.getCode, data)
	}
	static resetPwd(data){
		return fetch(url.resetPwd, data)
	}
	static getCodeForForget(data){
		return fetch(url.getCodeForForget, data)
	}
    static headImg(data){
        return fetch(url.headImg, data)
    }
    static feedback(data){
        return fetch(url.feedback, data)
    }
	 
}

export default user