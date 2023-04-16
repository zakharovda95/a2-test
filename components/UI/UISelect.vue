<template>
  <div class="flex gap-5">
    <label v-if="label" class="w-[160px] text-[16px] text-bold">{{ label }}</label>
    <select
      class="h-[30px] border-[1px] border-lightgray hover:border-green min-w-[200px] rounded-[3px] outline-none"
      :value="modelValueProxy"
      @change="modelValueProxy = $event.target.value"
    >
      <option class="bg-green text-[white] p-3" v-for="option in options" :key="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="js">
import Vue, { PropType } from 'vue';
import Multiselect from 'vue-multiselect';
import { ITimezoneOption } from '~/helpers/types/pages/setting-page.type';

export default Vue.extend({
  name: 'UISelect',

  components: {
    Multiselect,
  },

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

  computed: {
    modelValueProxy: {
      get() {
        return this.modelValue;
      },
      set(val) {
        console.log(val);
        this.$emit('update:model-value', val);
      },
    },
  },
});
</script>
