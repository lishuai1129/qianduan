<template>
  <div class="count">
    <h2>当前求和为:{{CountStore.sum}}</h2>
    <!-- v-model.number 尽可能的往数字转 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script lang="ts" setup name="Count">
  import { ref } from 'vue'
  // 分别暴露需要解构
  import { useCountStore } from '@/store/count.ts'

  const CountStore = useCountStore()
  // console.log('@@',CountStore.sum)
  // console.log('@@',CountStore.$state.sum)

  //数据
  let n = ref(1) // 选择的数据

  function add(){

  }
  function minus(){

  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }

  select,button{
    margin: 0 5px;
    height: 25px;
  }


</style>