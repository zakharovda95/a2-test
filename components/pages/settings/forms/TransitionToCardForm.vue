<template>
  <FormGroup title="Уведомления">
    <UIRadio
      id="current"
      label="В карточку в текущем окне"
      model-value="current-window"
      name="transition"
      @update:model-value="transitionType = $event"
    />

    <UIRadio
      id="separate"
      label="В карточку в отдельном окне"
      model-value="separate-window"
      name="transition"
      @update:model-value="transitionType = $event"
    >
    </UIRadio>

    <UIRadio
      id="source"
      label="На источник"
      model-value="source"
      name="transition"
      @update:model-value="transitionType = $event"
    >
      <template #additionalContent>
        <UIHelp text="Прямой переход в объявление на источнике" />
      </template>
    </UIRadio>
  </FormGroup>
</template>

<script lang="js">
import Vue from 'vue';
import UIRadio from '~/components/UI/UIRadio.vue';
import UIHelp from '~/components/UI/UIHelp.vue';
import FormGroup from '~/components/shared/FormGroup.vue';

export default Vue.extend({
  name: 'TransitionToCardForm',

  components: {
    UIHelp,
    UIRadio,
    FormGroup,
  },

  data: () => ({
    transitionType: '',
  }),
});
</script>
