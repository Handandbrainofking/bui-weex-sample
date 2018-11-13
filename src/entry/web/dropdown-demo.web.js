
import Vue from 'vue'
import weex from 'weex-vue-render'
weex.init(Vue)
import App from '../../../src/views/example/dropdown-demo.vue'
import buiweex from 'bui-weex';
Vue.use(buiweex);



new Vue(Vue.util.extend({el: '#root'}, App));
