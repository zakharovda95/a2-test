<template>
  <div class="border-b-[1px] border-lightgray justify-between flex p-4">
    <div class="flex gap-3">
      <input
        :id="id"
        ref="radio"
        v-bind="$attrs"
        type="radio"
        :value="value"
        v-model="modelValue"
      />
      <label class="text-[17px] text-gray cursor-pointer" :for="id">
        <NuxtLink v-if="labelLink" class="underline text-green" to="/">
          {{ label }}
        </NuxtLink>
        <span v-if="!labelLink">{{ label }}</span>
      </label>
    </div>

    <slot name="additionalContent" />
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'UIRadio',

  inheritAttrs: false,

  props: {
    modelValue: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: () => '',
    },
    value: {
      type: String,
      required: true,
    },
    labelLink: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  emits: ['update:model-value'],
});
</script>

<style scoped>
input[type='radio'],
label {
  cursor: pointer;
}

input[type='radio'] {
  position: relative;
  height: 20px;
  width: 20px;
  appearance: none;
  outline: none;
}

input[type='radio']::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 2px solid #2dc574;
}

input[type='radio']:disabled::after,
input[type='radio']:disabled::before {
  opacity: 0.3;
}

input[type='radio']:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #2dc574;
  transform: translate(-50%, -50%);
  /*visibility: visible;*/
}
</style>
