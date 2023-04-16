<template>
  <div class="flex justify-between">
    <div class="flex gap-5 cursor-pointer">
      <input
        class="h-[18px] w-[18px]"
        :id="id"
        v-bind="$attrs"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:model-value', $event.target.checked)"
      />
      <label class="text-[14px] max-w-[200px]" :for="id">{{ label }}</label>
    </div>

    <slot name="additionalContent" />
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'UICheckbox',

  inheritAttrs: false,

  props: {
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: () => '',
    },
  },

  emits: ['update:model-value']
});
</script>

<style scoped>
input[type='radio'],
label {
  cursor: pointer;
}

input[type='checkbox'] {
  position: relative;
  height: 20px;
  width: 20px;
  appearance: none;
  outline: none;
}

input[type='checkbox']::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #2dc574;
}

input[type='checkbox']:checked::before {
  background-color: #2dc574;
}

input[type='checkbox']:disabled::after,
input[type='checkbox']:disabled::before {
  opacity: 0.3;
}

input[type='checkbox']:checked::after {
  content: '✓️';
  position: absolute;
  color: white;
  top: 17%;
  left: 45%;
  width: 10px;
  height: 10px;
  background-color: transparent;
  transform: translate(-50%, -50%);
  /*visibility: visible;*/
}
</style>
