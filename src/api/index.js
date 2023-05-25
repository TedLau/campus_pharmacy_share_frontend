import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081/api/v1', // 根据后端实际API地址调整
  timeout: 3000,
});

export const getTotalMedicines = async () => {
  // 实现 getTotalMedicines API 函数
};

export const getTotalLivingAreas = async () => {
  // 实现 getTotalLivingAreas API 函数
};

export const getMedicineById = async (medicineId) => {
  return instance.get(`/medicine/${medicineId}`);
};

export const searchMedicines = async (query) => {
  return instance.get('/search/medicines', { params: { q: query } });
};

export const getUser = async (userId) => {
  return instance.get(`/user/${userId}`);
};

export const getMedicinesByRegion = (region_id) => {
  return instance.get(`/medicines/${region_id}`);
};

// 其他需要的API函数
