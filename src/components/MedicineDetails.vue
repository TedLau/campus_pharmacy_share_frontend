<template>
    <div>
      <h2>{{ medicine.name }}</h2>
      <p><strong>描述：</strong>{{ medicine.description }}</p>
      <p><strong>有效期至：</strong>{{ medicine.expiration_date }}</p>
      <p><strong>所属区域：</strong>{{ medicine.region_name }}</p>
      <button @click="goBack">返回</button>
    </div>
  </template>
  
  <script>
  import { getMedicineById } from '@/api';
  
  export default {
    data() {
      return {
        medicine: {},
      };
    },
    async created() {
      try {
        const medicineId = this.$route.params.id;
        this.medicine = await getMedicineById(medicineId);
      } catch (error) {
        console.error('获取药品详情失败:', error);
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2c3e50;
  }
  </style>
  