import LazyRenderDemo from '../views/example/lazy-render-demo.vue'
import buiweex from 'bui-weex'

Vue.use(buiweex);
LazyRenderDemo.el="#root";
new Vue(Vue.util.extend({ el: '#root'}, LazyRenderDemo));



