<template>
  <div>
    <UIText v-if="title" class="text-[20px] font-bold mb-4">{{ title }}</UIText>
    <div class="flex flex-col gap-4">
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
