import Vue from 'vue';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast, {
  type: 'top',
  duration: 3000,
  wordWrap: true,
  width: '250px',
});
