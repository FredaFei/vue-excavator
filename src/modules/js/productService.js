import { fetch, rap } from 'js/fetch.js'

let url = {
  classify: '/lists/classify.do',
  lists: '/lists/lists.do',
  articles: '/article/articles.do'
}

url = rap(url)

class product{
    static classify(data) {
        return fetch(url.classify, data)
    }
    static lists(data) {
        return fetch(url.lists, data)
    }
    static articles(data) {
        return fetch(url.articles, data)
    }
}

export default product