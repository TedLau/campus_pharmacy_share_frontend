<template>
    <div>
      <h1>创建生活园区</h1>
      <form @submit.prevent="createLivingArea">
        <label for="name">园区名称：</label>
        <input type="text" id="name" v-model="name" required />
        <br />
        <label for="university_id">所属大学ID：</label>
        <input type="number" id="university_id" v-model="university_id" required />
        <br />
        <button type="submit">创建</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        university_id: ''
      };
    },
    methods: {
      async createLivingArea() {
        try {
          await axios.post(
            'http://localhost:8080/api/living_area',
            {
              name: this.name,
              university_id: this.university_id
            },
            {
              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            }
          );
          this.$router.push('/dashboard');
        } catch (error) {
          console.error('创建生活园区失败：', error);
        }
      }
    }
  };
  </script>
  