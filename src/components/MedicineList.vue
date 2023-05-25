<template>
    <v-container fluid>
      <v-data-table
        :headers="headers"
        :items="medicines"
        :search="search"
:items-per-page="5"
class="elevation-1"
>
<template v-slot:top>
<v-toolbar flat color="white">
<v-toolbar-title>药品列表</v-toolbar-title>
<v-divider class="mx-4" inset vertical></v-divider>
<v-spacer></v-spacer>
<v-text-field
         v-model="search"
         append-icon="mdi-magnify"
         label="搜索"
         single-line
         hide-details
       ></v-text-field>
<v-spacer></v-spacer>
<v-btn color="primary" @click="$router.push('/medicines/new')">添加药品</v-btn>
</v-toolbar>
</template>
</v-data-table>
</v-container>
</template> 
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        medicines: []
      };
    },
    async mounted() {
      await this.fetchMedicines();
    },
    methods: {
      async fetchMedicines() {
        try {
          const response = await axios.get('http://localhost:8080/api/medicine', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          this.medicines = response.data;
        } catch (error) {
          console.error('获取药品列表失败：', error);
        }
      },
      async deleteMedicine(id) {
        try {
          await axios.delete(`http://localhost:8080/api/medicine/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          await this.fetchMedicines();
        } catch (error) {
          console.error('删除药品失败：', error);
        }
      }
    }
  };
  </script>
  