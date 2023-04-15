<template>
  <FormGroup>
    <UIInput
      label="Компания"
      class="my-4"
      :model-value="body.company"
      @update:model-value="body.company = $event"
    />

    <UIInput
      label="Логин"
      class="my-4"
      :model-value="body.login"
      @update:model-value="body.login = $event"
    />

    <UIInput
      label="Номер телефона"
      class="my-4"
      :model-value="body.company"
      @update:model-value="body.company = $event"
    />

    <UIInput
      label="Имя"
      class="my-4"
      :model-value="body.company"
      @update:model-value="body.company = $event"
    />

    <UIInput
      label="Фамилия"
      class="my-4"
      :model-value="body.company"
      @update:model-value="body.company = $event"
    />
    <p class="text-[14px] text-lightgray relative left-[120px] top-[-10px]">* не обязательно</p>
  </FormGroup>
</template>

<script lang="js">
import Vue from 'vue';

import UIInput from '~/components/UI/UIInput.vue';
import FormGroup from '~/components/shared/FormGroup.vue';

export default Vue.extend({
  name: 'AccountForm',

  components: {
    UIInput,
    FormGroup,
  },

  data: () => ({
    body: {
      company: '',
      login: '',
      phoneNumber: '',
      firstName: '',
      secondName: '',
    },
  }),
});
</script>
