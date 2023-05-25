<template>
  <div>
    <h2>用户信息</h2>
    <div class="user-info">
      <p><strong>用户名：</strong>{{ user.username }}</p>
      <p><strong>邮箱：</strong>{{ user.email }}</p>
    </div>
    <router-link to="/edit-profile">编辑资料</router-link>
  </div>
</template>

<script>
import { getUser } from '@/api';

export default {
  data() {
    return {
      user: {},
    };
  },
  async created() {
    try {
      this.user = await getUser(this.$route.params.id);
    } catch (error) {
      console.error('获取用户信息失败:', error);
    }
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

.user-info {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

a {
  display: inline-block;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  background-color: #2c3e50;
}
</style>