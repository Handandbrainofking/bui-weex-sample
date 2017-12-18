import FlexBoxDemo from '../views/example/flex-box-demo.vue'
import buiweex from 'bui-weex'

Vue.use(buiweex);
FlexBoxDemo.el="#root";
new Vue(Vue.util.extend({ el: '#root'}, FlexBoxDemo));



