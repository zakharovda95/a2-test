<template>
  <div class="border-b-[1px] border-lightgray justify-between flex p-4">
    <div class="flex gap-3">
      <input
        ref="radio"
        :id="id"
        v-bind="$attrs"
        type="radio"
        :value="modelValue"
        @change="$emit('update:model-value', $event.target.value)"
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

<script lang="ts">
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
    labelLink: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
});
</script>
