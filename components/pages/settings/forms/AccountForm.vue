<template>
  <FormGroup>
    <UIInput
      id="settings-company"
      label="Компания"
      class="my-4"
      :model-value="settings.company"
      @update:model-value="setCompany($event)"
    />

    <UIInput
      id="settings-login"
      label="Логин"
      class="my-4"
      :model-value="settings.login"
      @update:model-value="setLogin($event)"
    />

    <UIInput
      id="settings-phone"
      label="Номер телефона"
      class="my-4"
      :model-value="settings.phoneNumber"
      @update:model-value="setPhoneNumber($event)"
    />

    <UIInput
      id="settings-name"
      label="Имя"
      class="my-4"
      :model-value="settings.firstName"
      @update:model-value="setFirstName($event)"
    />

    <UIInput
      id="settings-second-name"
      label="Фамилия"
      class="my-4"
      :model-value="settings.secondName"
      @update:model-value="setSecondName($event)"
    />
    <p class="text-[14px] text-lightgray relative left-[120px] top-[-10px]">* не обязательно</p>
  </FormGroup>
</template>

<script lang="ts">
import Vue from 'vue';

import UIInput from '~/components/UI/UIInput.vue';
import FormGroup from '~/components/shared/FormGroup.vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'AccountForm',

  components: {
    UIInput,
    FormGroup,
  },

  methods: {
    ...mapMutations({
      setCompany: 'settings.store/setCompany',
      setLogin: 'settings.store/setLogin',
      setPhoneNumber: 'settings.store/setPhoneNumber',
      setFirstName: 'settings.store/setFirstName',
      setSecondName: 'settings.store/setSecondName',
    }),
  },

  computed: {
    ...mapGetters({
      settings: 'settings.store/settings',
    }),
  },
});
</script>
