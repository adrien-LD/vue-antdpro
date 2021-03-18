import { createApp } from 'vue';
import { Button } from 'ant-design-vue';
import App from './App.vue';
import store from './store';
import 'ant-design-vue/dist/antd.less';

createApp(App)
  .use(store)
  .use(Button)
  .mount('#app');
