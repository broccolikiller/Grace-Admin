<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user/>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" autocomplete="new-password" placeholder="密码：123456" show-password
                type="password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock/>
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CircleClose" round size="large" @click="resetForm(loginFormRef)"> 重置</el-button>
    <el-button :icon="UserFilled" :loading="loading" round size="large" type="primary" @click="login(loginFormRef)">
      登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";
import {CircleClose, UserFilled} from "@element-plus/icons-vue";
import type {ElForm} from "element-plus";

type FormInstance = InstanceType<typeof ElForm>
const loginFormRef = ref<FormInstance>();
const loading = ref(false);
const loginForm = reactive({
  username: "",
  password: ""
})
const loginRules = reactive({
  username: [{required: true, message: "请输入用户名", trigger: "blur"}],
  password: [{required: true, message: "请输入密码", trigger: "blur"}]
});
// 登录
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      // 执行登录接口
      // const {data} = await loginApi()

    }catch (e) {
      
    }finally {

    }

  })
};
// 清空表单
const resetForm = () => {
  // if (!formEl) return;
  // formEl.resetFields();
};

</script>

<style lang="scss" scoped>
@import "../index";
</style>