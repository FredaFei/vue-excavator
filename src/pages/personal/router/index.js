import VueRouter from 'vue-router'
Vue.use(VueRouter)

import path from '../tabConfig.js'

let routes = []
path.forEach((item)=>{
	let pathTmp = item.path

    if (item.children) {
        let childRoutes = []
        item.children.forEach(item=>{
            let chPath = item.path
            childRoutes.push({ 
                path: chPath, 
                component: resolve => require([`../components/${chPath}.vue`], resolve)
            })  
        })
        routes.push({ 
            path: `/${pathTmp}`, 
            component: resolve => require([`../components/${pathTmp}.vue`], resolve),
            children: childRoutes
        })
    }else{
      routes.push({ 
        path: `/${pathTmp}`, 
        component: resolve => require([`../components/${pathTmp}.vue`], resolve)
      })  
    }
	
})

export default new VueRouter({
	routes
})
