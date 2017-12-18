import DialogDemo from '../views/example/dialog-demo.vue'
import buiweex from 'bui-weex'

Vue.use(buiweex);
DialogDemo.el="#root";
new Vue(Vue.util.extend({ el: '#root'}, DialogDemo));



