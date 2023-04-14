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
      type: String as PropType<'renderless'>,
      required: false,
      default: () => 'renderless',
    },
  },

  computed: {
    buttonView() {
      return {
        'bg-transparent': this.customType === 'renderless',
      };
    },
  },
});
</script>
