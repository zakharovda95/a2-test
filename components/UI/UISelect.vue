<template>
  <div class="flex gap-5">
    <label v-if="label" class="w-[160px] text-[16px] text-bold">{{ label }}</label>
    <Multiselect
      :options="options"
      :deselect-label="false"
      :select-label="false"
      :searchable="false"
      :allow-empty="false"
      label="name"
    >
    </Multiselect>
  </div>
</template>

<script lang="ts">
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
    options: {
      type: Object as PropType<ITimezoneOption>,
      required: true,
    },
  },
});
</script>
