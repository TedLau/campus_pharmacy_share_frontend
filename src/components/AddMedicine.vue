<template>
    <v-app>
      <v-main>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card>
                <v-card-title>
                  <span class="headline">添加药品</span>
                </v-card-title>
  
                <v-card-text>
                  <v-form ref="form" v-model="valid">
                    <v-text-field
                      v-model="name"
                      :rules="[v => !!v || '药品名称是必填项']"
                      label="药品名称"
                      required
                    ></v-text-field>
  
                    <v-textarea
                      v-model="description"
                      :rules="[v => !!v || '药品描述是必填项']"
                      label="药品描述"
                      required
                    ></v-textarea>
  
                    <v-text-field
                      v-model="quantity"
                      :rules="[v => !!v || '药品数量是必填项']"
                      label="药品数量"
                      type="number"
                      required
                    ></v-text-field>
  
                    <v-text-field
                      v-model="expiryDate"
                      :rules="[v => !!v || '过期日期是必填项']"
                      label="过期日期"
                      type="date"
                      required
                    ></v-text-field>
  
                    <v-select
                      v-model="livingAreaID"
                      :items="livingAreas"
                      :rules="[v => !!v || '生活园区是必选项']"
                      label="生活园区"
                      required
                    ></v-select>
                  </v-form>
                </v-card-text>
  
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="submit">添加</v-btn>
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
        name: "",
        description: "",
        quantity: "",
        expiryDate: "",
        livingAreaID: null,
        livingAreas: [], // 用于存储生活园区的选项
      };
    },
    created() {
      // 获取生活园区数据，并将其设置为livingAreas数组
      this.fetchLivingAreas();
    },
    methods: {
      async fetchLivingAreas() {
        // 获取生活园区数据的逻辑（从后端API获取）
        // 请注意，这里需要实现相应的API请求
      },
      submit() {
        if (this.$refs.form.validate()) {
          // 提交添加药品表单
          // 请注意，这里需要实现相应的API请求
        }
      },
    },
  };
  </script>
  