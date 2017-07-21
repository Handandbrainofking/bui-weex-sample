import UiControlDemo from '../views/example/dropdown-demo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);
UiControlDemo.el="#root";
new Vue(UiControlDemo);

