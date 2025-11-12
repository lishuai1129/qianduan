<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
  let sum = ref(0)

  function add() {
    sum.value += 1
  }

  // 创建
  console.log('创建')

  // 挂在
  onBeforeMount(()=>{
    console.log('挂载前')
  })
  // 挂在完毕
  onMounted(()=>{
    console.log('子--挂载完毕')
  })

  // 更新前
  onBeforeUpdate(()=>{
    console.log('更新前')
  })
  // 更新完毕
  onUpdated(()=>{
    console.log('更新完毕')
  })

  // 卸载
  onBeforeUnmount(()=>{
    console.log('卸载前')
  })
  // 卸载完毕
  onUnmounted(()=>{
    console.log('卸载完毕')
  })



</script>


<style scoped>
/* scoped 局部样式 */
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>
