<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';

// 获取导航列表的action
import {useCategoryStore} from '@/stores/category'
const categoryStore = useCategoryStore()
import {onMounted} from 'vue'
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
  <LayoutFixed />
</template>