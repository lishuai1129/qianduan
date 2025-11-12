<template>
  <!-- 注意ref是标识 -->
  <!-- <Person a="哈哈" :list="personList" :d="x" ref="qwe"/> -->
  <Person a="哈哈" :list="personList"/>

</template>
  
<script lang="ts" setup name="App" >
  import Person from './components/Person.vue';
  import { reactive } from 'vue';
  import {type Persons} from '@/types'
  //  let personList: Persons = reactive([
  let personList = reactive<Persons>([
    {id:'asud1',name:'张三',age:18},
    {id:'asyd2',name:'李四',age:19},
    {id:'asud3',name:'王五',age:20}
  ])

  let x = 9

  // console.log(personList)
</script>

<style >
.app {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>