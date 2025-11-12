<template>
  <div class="about">
    <h2>大家好，欢迎来到尚硅谷直播间</h2>
  </div>
</template>

<script setup lang="ts" name="About">
import { onMounted,onUnmounted } from 'vue';

// 只有在使用的时候才挂载，切换页面的时候就卸载掉
  onMounted(()=>{
    console.log('About--挂载完毕')
  })
  onUnmounted(()=>{
    console.log('About--卸载完毕')
  })

</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(85, 84, 84);
  font-size: 18px;
}
</style>