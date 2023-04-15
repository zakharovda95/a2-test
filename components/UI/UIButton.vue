<template>
  <button :class="buttonView">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'UIButton',

  props: {
    customType: {
      type: String as PropType<'transparent' | 'green-large'>,
      required: false,
      default: () => 'transparent',
    },
  },

  computed: {
    buttonView() {
      return {
        'bg-transparent': this.customType === 'transparent',
        'bg-green text-white rounded-[3px] h-[40px]': this.customType === 'green-large',
      };
    },
  },
});
</script>
