<template>
  <FormGroup title="Уведомления">
    <UIRadio
      value="0"
      id="current"
      label="В карточку в текущем окне"
      :model-value="String(settings.redirecttarget)"
      name="transition"
      @update:model-value="setTransitionType($event)"
    />

    <UIRadio
      value="1"
      id="separate"
      label="В карточку в отдельном окне"
      :model-value="String(settings.redirecttarget)"
      name="transition"
      @update:model-value="setTransitionType($event)"
    >
    </UIRadio>

    <UIRadio
      value="2"
      id="source"
      label="На источник"
      :model-value="String(settings.redirecttarget)"
      name="transition"
      @update:model-value="setTransitionType($event)"
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
import {mapGetters, mapMutations} from "vuex";

export default Vue.extend({
  name: 'TransitionToCardForm',

  components: {
    UIHelp,
    UIRadio,
    FormGroup,
  },

  computed: {
    ...mapGetters({
      settings: "settings.store/settings"
    })
  },

  methods: {
    ...mapMutations({
      setTransitionType: 'settings.store/setTransitionType'
    })
  }
});
</script>
