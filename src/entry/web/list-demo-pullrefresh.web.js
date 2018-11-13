
import Vue from 'vue'
import weex from 'weex-vue-render'
weex.init(Vue)
import App from '../../../src/views/example/list-demo-pullrefresh.vue'
import buiweex from 'bui-weex';
Vue.use(buiweex);
App.el = '#root'
new Vue(App)

new Vue(Vue.util.extend({el: '#root'}, App));
