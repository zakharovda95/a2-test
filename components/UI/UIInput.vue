<template>
  <div class="flex w-full justify-between">
    <label
      v-if="label"
      for="input"
      class="text-text-description mr-5"
      style="width: 100px !important"
    >
      {{ label }}
    </label>
    <input
      id="input"
      class="h-[35px] min-w-[240px] rounded-[3px] border-[1px] border-lightgray outline-none focus:border-green px-3"
      :value="modelValue"
      @input="$emit('update:model-value', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UIInput',

  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: () => '',
    },
  },
});
</script>
