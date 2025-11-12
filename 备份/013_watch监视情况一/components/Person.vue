<template>
  <div class="person">
    <h1>情况1：监视【ref】定义的【基本数据】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSun">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { textChangeRangeIsUnchanged } from 'typescript';
import {ref,watch} from 'vue'
  const sum = ref(0)
  function changeSun(){
    sum.value += 1
  }


  //监视 watch（谁，回调函数)  这里sum不需要value
  // 情况1：监视【ref】定义的【基本数据】数据
  const stopWatch =  watch(sum,(newValue,oldValue)=>{
    console.log('sun变化了',newValue,oldValue)
    console.log(stopWatch) //返回值停止监视
    if(newValue >= 10){
      // 返回值停止监视
      stopWatch()
    }
  })

</script>

<style scoped>
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
