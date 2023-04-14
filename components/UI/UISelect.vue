<template>
  <div>
    <Multiselect
      class="max-w-[200px] p-[3px]"
      :options="options"
      :deselect-label="false"
      :select-label="false"
      :searchable="false"
      :allow-empty="false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Multiselect from 'vue-multiselect';

export default Vue.extend({
  name: 'UISelect',

  components: {
    Multiselect,
  },

  inheritAttrs: false,

  props: {
    options: {
      type: Object,
      required: true,
    },
  },
});
</script>
