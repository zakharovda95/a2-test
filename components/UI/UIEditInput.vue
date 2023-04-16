<template>
  <div>
    <div class="flex gap-4" v-if="!isInputShowed">
      <UIText class="text-[14px]">{{ modelValue }}</UIText>
      <EditSvg
        class="w-[24px] h-[24px] cursor-pointer"
        @click.native="isInputShowed = !isInputShowed"
      />
    </div>

    <UIInput
      :id="id"
      v-else
      :model-value="modelValue"
      @update:model-value="$emit('update:model-value', $event)"
    />
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import EditSvg from '~/components/svg/EditSvg.vue';
import UIInput from '~/components/UI/UIInput.vue';
import UIText from "~/components/UI/UIText.vue";

export default Vue.extend({
  name: 'UIEditInput',

  components: { UIInput, EditSvg, UIText },

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
  },

  emits: ['update:model-value'],

  data: () => ({
    isInputShowed: false,
  }),
});
</script>
