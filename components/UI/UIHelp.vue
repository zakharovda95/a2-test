<template>
  <UIButton
    v-tippy="{
      arrow: true,
      placement: 'bottom',
      content: text,
      theme: 'blue-theme',
    }"
  >
    <img alt="help" width="20" height="20" src="~/static/img/help.svg" />
  </UIButton>
</template>

<script lang="ts">
import Vue from 'vue';
import UIButton from '~/components/UI/UIButton.vue';
export default Vue.extend({
  name: 'UIHelp',

  components: {
    UIButton,
  },

  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style></style>
