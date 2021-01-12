<template>
  <div class="login flex-center">
    <main class="both-left-center">
      <img :src="require('./left.png')" />
      <div class="right">
        <div className="header">
          <h2>芒果打印后台</h2>
          <p className="desc">一款专门做照片打印的平台</p>
        </div>
        <el-form
          ref="formEl"
          label-position="right"
          label-width="80px"
          :model="form"
          :rules="rules"
          class="demo-form-inline"
        >
          <el-form-item prop="name">
            <label>
              <i class="el-icon-user" />
            </label>
            <el-input placeholder="请输入手机号" v-model="form.phone" />
          </el-form-item>
          <el-form-item prop="pwd">
            <label>
              <i class="el-icon-lock" />
            </label>
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="form.pwd"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
        <footer>
          <p>Mango Print ©2021.01.08 Created by Wenjun</p>
        </footer>
      </div>
    </main>
  </div>
</template>

<script lang='ts'>
import { Vue } from "vue-class-component";

export default class Login extends Vue {
  form = {
    phone: "",
    pwd: "",
  };
  rules = {
    phone: [{ required: true, message: "请输入账号", trigger: "blur" }],
    pwd: [
      { required: true, message: "请输入账号", trigger: "blur" },
      { min: 5, message: "密码不能少于5位", trigger: "blur" },
      { max: 15, message: "密码不能大于15位", trigger: "blur" },
    ],
  };

  created() {
    if (this.$utils.getCookie("token")) {
      this.$router.push({ path: "/" });
    }
  }

  submitForm() {
    const refs: any = this.$refs;
    refs["formEl"].validate(async (valid: boolean) => {
      if (valid) {
        const res = await this.$api.login(this.form);
        this.$utils.setCookie("token", res);
        this.$router.push({ path: "/" });
      } else {
        return false;
      }
    });
  }
}
</script>

<style scoped lang='less'>
@import "./index.less";
</style>