<template>
  <div class="person">
    ？？？
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,defineExpose} from 'vue'
  import {type PersonInter,type Persons} from '@/types'
//要符合接口规范
  /*let person:PersonInter = {id:'fdsfsd',name:'张三',age:18}
  let personList:Array<PersonInter> = [
    {id:'fdsfsd',name:'张三',age:18},
    {id:'fdsfsd',name:'张三',age:18},
    {id:'fdsfsd',name:'张三',age:18},
  ]*/

  let personList:Persons = [
    {id:'fdsfsd',name:'张三',age:18},
    {id:'fdsfsd',name:'张三',age:18},
    {id:'fdsfsd',name:'张三',age:18},
  ]



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
