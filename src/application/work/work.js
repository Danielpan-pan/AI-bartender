import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
import App from './work.vue'
import router from './router';
import VueCookie from 'vue-cookie'
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue';

import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false
Vue.use(VueQuillEditor)
Vue.use(VueCookie)   // 掛在在全域性了

Vue.use(Antd);


Vue.use(DatePicker);
//hgl的配置
import store from './store'
import http from './api/config';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
//使得我们可以使用axios
Vue.prototype.$http = http


Vue.config.productionTip = false




new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')