import Vue from 'vue';
// @ts-ignore
import VueTippy, { TippyComponent } from 'vue-tippy';

Vue.use(VueTippy, {
  directive: 'tippy',
  flipDuration: 0,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false,
      },
    },
  },
});

Vue.component('VueTippy', TippyComponent);
