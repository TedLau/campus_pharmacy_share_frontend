<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <v-card-title>
                <span class="headline">登录</span>
              </v-card-title>

              <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    v-model="username"
                    :rules="[v => !!v || '用户名是必填项']"
                    label="用户名"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :rules="[v => !!v || '密码是必填项']"
                    label="密码"
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="login">登录</v-btn>
                <v-btn color="blue darken-1" text @click="goToRegister">注册</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        // 提交登录表单
      }
    },
    goToRegister() {
      // 跳转到注册页面
      this.$router.push({ name: "RegisterPage" });
    },
  },
};
</script>
