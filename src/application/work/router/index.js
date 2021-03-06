import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/application/work/page/index.vue'

//使用 vue-router
Vue.use(VueRouter)

//匯出vue-router 設置
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../common/Home.vue'),
            meta: {title: '自述文件'},
            children: [
                {
                    path: '/Index',
                    component: Index,
                    meta: {title: '系统首页'}
                },
            ]
        }
    ]
})
