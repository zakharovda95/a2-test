<template>
  <div>
    <UIText v-if="title" class="text-[20px] font-bold">{{ title }}</UIText>
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import UIText from '~/components/UI/UIText.vue';

export default Vue.extend({
  name: 'FormGroup',

  components: {
    UIText,
  },

  props: {
    title: {
      type: String,
      required: false,
      default: () => '',
    },
  },
});
</script>
