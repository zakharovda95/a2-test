<template>
  <FormGroup title="Вход">
    <UIInput
      id="login-phone"
      v-mask="'###########'"
      :model-value="login"
      @update:model-value="setLogin($event)"
    />
    <UIInput
      id="login-password"
      type="password"
      :model-value="password"
      @update:model-value="setPassword($event)"
    />

    <UIButton @click.native.prevent="loginAction" custom-type="green-large">Отправить</UIButton>
    <NuxtLink class="underline text-green text-[14px]" to="/auth/register"> Регистрация </NuxtLink>
    <UIError v-if="errors" :errors="errors" />
  </FormGroup>
</template>

<script lang="js">
import Vue from 'vue';

import FormGroup from '~/components/shared/FormGroup.vue';
import UIInput from '~/components/UI/UIInput.vue';
import UIButton from '~/components/UI/UIButton.vue';
import UIError from '~/components/UI/UIError.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { mask } from 'vue-the-mask';

export default Vue.extend({
  name: 'LoginForm',

  directives: { mask },

  components: {
    UIButton,
    UIInput,
    UIError,
    FormGroup,
  },

  computed: {
    ...mapGetters({
      errors: 'errors.store/loginErr',
      login: 'login.store/login',
      password: 'login.store/password',
    }),
  },

  methods: {
    ...mapMutations({
      setLogin: 'login.store/setLogin',
      setPassword: 'login.store/setPassword',
    }),

    ...mapActions({
      loginAction: 'login.store/login',
    }),
  },
});
</script>
