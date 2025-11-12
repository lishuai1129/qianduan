<template>
  <div class="count">
    <h2>当前求和为:{{sum}}，放大10倍后：{{ bigSum }}</h2>
    <h3>欢迎来到：{{ school }},坐落于：{{ address }}，大写：{{ upperSchool }}</h3>
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
  import { ref,toRefs } from 'vue'
  import { storeToRefs } from 'pinia'
  // 分别暴露需要解构
  import { useCountStore } from '@/store/count.ts'
  // 使用useCountStore获得一个专门保存count相关的store
  const countStore = useCountStore()
  // storeToRefs只会关注store中的数据，不会对方法进行ref包裹
  const { sum, school, address,bigSum,upperSchool } = storeToRefs(countStore) 


  //数据
  let n = ref(1) // 选择的数据
  function add(){ 
    countStore.increment(n.value)
  } 

  function minus(){
    countStore.sum -= n.value
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