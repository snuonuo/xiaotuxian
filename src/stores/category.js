import { ref } from 'vue'
import {getCategoryAPI} from '@/apis/layout'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  // 导航列表的逻辑
  // state导航列表数据
    const categoryList = ref([])
    // action获取导航数据的方法
    const getCategory = async ()=>{
        const res = await getCategoryAPI()
        console.log(res)
        categoryList.value = res.result
    }
    return {
        categoryList,
        getCategory
    }
})
