<template>
  <div>
    <EditSvg
      v-if="!isInputShowed"
      class="w-[24px] h-[24px] cursor-pointer"
      @click.native="isInputShowed = !isInputShowed"
    />
    <UIInput
      v-else
      :model-value="modelValue"
      @update:modelValue="$emit('update:model-value', $event)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EditSvg from '~/components/svg/EditSvg.vue';
import UIInput from '~/components/UI/UIInput.vue';

export default Vue.extend({
  name: 'UIEditInput',

  components: { UIInput, EditSvg },

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

  data: () => ({
    isInputShowed: false,
  }),
});
</script>
