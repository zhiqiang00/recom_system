import Vue from "vue";
import { Button, FormItem, Form, Input, Message } from "element-ui";

// 设置全局
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$message = Message;
