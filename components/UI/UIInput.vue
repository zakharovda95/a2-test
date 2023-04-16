<template>
  <div class="flex full:flex-row flex-col w-full justify-between">
    <label v-if="label" :for="id" class="w-[200px] full:w-[100px] text-text-description mr-5">
      {{ label }}
    </label>
    <input
      :type="type"
      :id="id"
      class="h-[35px] min-w-[240px] rounded-[3px] border-[1px] border-lightgray outline-none focus:border-green px-3"
      :value="modelValue"
      @input="$emit('update:model-value', $event.target.value)"
    />
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'UIInput',

  props: {
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: () => '',
    },
    type: {
      type: String,
      required: false,
      default: () => 'text',
    },
  },
});
</script>
