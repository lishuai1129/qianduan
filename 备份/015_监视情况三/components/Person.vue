<template>
  <div class="person">
    <h1>情况3：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
    
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch,reactive} from 'vue'
  let person = reactive({
    name:'张三',
    age:18
  })
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }

  // reactive局限性不能直接改
  // function changePerson() {
  //   person = { name:'李四', age:20 }  ref可以这么改 地址发生变化
  // }

  function changePerson() {
    Object.assign(person,{ name:'李四',age:20})  //person 地址不变
  }

  //情况3：监视【reactive】定义的【对象类型】数据,默认是开启深度监视 深度关不掉
  watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
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
