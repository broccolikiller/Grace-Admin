<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <!--<SwitchDark class="dark"/>-->
      <div class="login-left">
        <img alt="login" class="login-left-img" src="@/assets/images/login_left.png"/>
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img alt="" class="login-icon" src="@/assets/images/logo.svg"/>
          <h2 class="logo-text">Grace-Admin</h2>
        </div>
        <LoginForm/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "@/views/login/components/LoginForm.vue";
</script>

<style lang="scss" scoped>
@import './index';
</style>