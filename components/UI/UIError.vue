<template>
  <div class="max-w-[300px]">
    <UIText class="text-[red] text-[12px]" v-for="error in errors" :key="error.id">
      {{ error.title }}
    </UIText>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import UIText from '~/components/UI/UIText.vue';

export default Vue.extend({
  name: 'UIError',

  components: {
    UIText,
  },

  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
});
</script>
