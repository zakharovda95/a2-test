<template>
  <FormGroup title="Вход">
    <UIInput :model-value="body.login" @update:model-value="body.login = $event" />
    <UIInput :model-value="body.password" @update:model-value="body.login = $event" />

    <UIButton custom-type="green-large">Отправить</UIButton>
    <NuxtLink class="underline text-green text-[14px]" to="/auth/registration">
      Регистрация
    </NuxtLink>
  </FormGroup>
</template>

<script lang="js">
import Vue from "vue";

import FormGroup from "~/components/shared/FormGroup.vue";
import UIInput from "~/components/UI/UIInput.vue";
import UIButton from "~/components/UI/UIButton.vue";

export default Vue.extend({
  name: 'LoginForm',

  components: {
    UIButton,
    UIInput,
    FormGroup
  },

  data: () => ({
    body: {
      login: '',
      password: '',
    }
  })
})
</script>
