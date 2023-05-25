<template>
    <div>
      <h2>仪表盘</h2>
      <div class="statistics">
        <div class="statistic">
          <h3>药品总数</h3>
          <p>{{ totalMedicines }}</p>
        </div>
        <div class="statistic">
          <h3>生活园区总数</h3>
          <p>{{ totalLivingAreas }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getTotalMedicines, getTotalLivingAreas } from '@/api';
  
  export default {
    data() {
      return {
        totalMedicines: 0,
        totalLivingAreas: 0,
      };
    },
    async created() {
      try {
        this.totalMedicines = await getTotalMedicines();
        this.totalLivingAreas = await getTotalLivingAreas();
      } catch (error) {
        console.error('获取统计数据失败:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  .statistics {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
  }
  
  .statistic {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
  }
  </style>
  