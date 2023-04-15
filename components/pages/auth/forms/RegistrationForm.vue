<template>
  <FormGroup title="Регистрация">
    <UIInput :model-value="body.phone" @update:model-value="body.phone = $event" />

    <UIButton custom-type="green-large">Отправить</UIButton>
    <NuxtLink class="underline text-green text-[14px]" to="/auth/login"> Войти </NuxtLink>
  </FormGroup>
</template>

<script lang="js">
import Vue from "vue";

import FormGroup from "~/components/shared/FormGroup.vue";
import UIInput from "~/components/UI/UIInput.vue";
import UIButton from "~/components/UI/UIButton.vue";

export default Vue.extend({
  name: 'RegistrationForm',

  components: {
    UIButton,
    UIInput,
    FormGroup
  },

  data: () => ({
    body: {
      phone: '',
    }
  })
})
</script>
