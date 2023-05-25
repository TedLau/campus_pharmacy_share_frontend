<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card>
              <v-toolbar color="primary" dark>
                <v-toolbar-title>注册</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field label="用户名" v-model="username" required></v-text-field>
                  <v-text-field label="邮箱" v-model="email" required></v-text-field>
                  <v-text-field label="密码" v-model="password" type="password" required></v-text-field>
                  <v-text-field
                    label="确认密码"
                    v-model="confirmPassword"
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="submit">注册</v-btn>
                <v-btn color="primary" @click="navigateToLogin">登录</v-btn>
             
              </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</v-app>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      valid: true,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        try {
          const response = await axios.post("http://localhost:8081/api/v1/register", {
            username: this.username,
            email: this.email,
            password: this.password,
          });

          // 将 JWT 令牌存储在 localStorage 或 sessionStorage 中
          localStorage.setItem("token", response.data.token);

          // 跳转到其他页面，例如主页
          this.$router.push("/home");
        } catch (error) {
          // 处理注册失败的情况，例如显示错误信息
          console.error("注册失败", error);
        }
      }
    },
    navigateToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

