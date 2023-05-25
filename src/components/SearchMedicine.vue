<template>
    <div>
      <h2>搜索药品</h2>
      <div class="search">
        <input type="text" v-model="searchQuery" placeholder="搜索药品" />
        <button @click="searchMedicine">搜索</button>
      </div>
      <div class="medicine-list">
        <div v-for="medicine in medicines" :key="medicine.id" class="medicine-item">
          <h3>{{ medicine.name }}</h3>
          <p>{{ medicine.description }}</p>
<router-link :to="{ name: 'MedicineDetails', params: { id: medicine.id } }">查看详情</router-link>
</div>
</div>

  </div>
</template>
<script>
import { searchMedicines } from '@/api';

export default {
  data() {
    return {
      searchQuery: '',
      medicines: [],
    };
  },
  methods: {
    async searchMedicine() {
      try {
        this.medicines = await searchMedicines(this.searchQuery);
      } catch (error) {
        console.error('搜索药品失败:', error);
      }
    },
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
}

.search {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

input {
  width: 100%;
  max-width: 400px;
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

.medicine-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.medicine-item {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  max-width: 300px;
}
</style> 