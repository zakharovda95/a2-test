<template>
  <FormGroup>
    <UIInput
      id="settings-company"
      label="Компания"
      class="my-4"
      :model-value="settings?.companyname"
      @update:model-value="setCompany($event)"
    />

    <UIInput
      id="settings-login"
      label="Логин"
      class="my-4"
      :model-value="settings?.login"
      @update:model-value="setLogin($event)"
    />

    <UIInput
      id="settings-phone"
      label="Номер телефона"
      class="my-4"
      :model-value="settings?.phone"
      @update:model-value="setPhoneNumber($event)"
    />

    <UIInput
      id="settings-name"
      label="Имя"
      class="my-4"
      :model-value="settings?.fname"
      @update:model-value="setFirstName($event)"
    />

    <UIInput
      id="settings-second-name"
      label="Фамилия"
      class="my-4"
      :model-value="settings?.lname"
      @update:model-value="setSecondName($event)"
    />
    <p class="text-[14px] text-lightgray relative left-[120px] top-[-10px]">* не обязательно</p>
  </FormGroup>
</template>

<script lang="js">
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
      setPhoneNumber: 'settings.store/setPhone',
      setFirstName: 'settings.store/setFirstName',
      setSecondName: 'settings.store/setSecondName',
    }),
  },

  computed: {
    ...mapGetters({
      settings: 'settings.store/settings',
    }),
  },


  watch: {
    settings: {
      deep: true,
      immediate: true,
      handler() {
        console.log(this.settings)
      }
    }
  }
});
</script>
