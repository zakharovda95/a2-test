<template>
  <div class="flex gap-5">
    <label v-if="label" class="w-[160px] text-[16px] text-bold">{{ label }}</label>
    <select
      class="h-[30px] border-[1px] border-lightgray hover:border-green min-w-[200px] rounded-[3px] outline-none"
      :value="modelValueProxy"
      @change="modelValueProxy = $event.target.value"
    >
      <option
        class="bg-green text-[white] text-[1.1rem] p-[5px]"
        v-for="option in options"
        :value="option.value"
        :key="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'UISelect',

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },

  emits: ['update:model-value'],

  computed: {
    modelValueProxy: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit('update:model-value', val);
      },
    },
  },
});
</script>
