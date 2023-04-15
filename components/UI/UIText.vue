<template>
  <div>
    <p v-if="!title" v-bind="$attrs" class="leading-text-lh">
      <slot />
    </p>
    <h3 v-if="title" v-bind="$attrs" class="text-text-header leading-header-lh font-bold">
      <slot />
    </h3>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'UIText',

  inheritAttrs: false,

  props: {
    title: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
});
</script>
