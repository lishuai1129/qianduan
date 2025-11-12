<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">改名</button>
    <button @click="changeAge">改年龄</button>
    <button @click="changeC1">修改c1</button>
    <button @click="changeC2">修改c2</button>
    <button @click="changeCar">修改汽车</button>
    
    


    
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,reactive,watch} from 'vue'


  let person = reactive({
    name:'张三',
    age:18,
    car:{
      c1:'奔驰',
      c2:'宝马'
    }
  })

  // 方法
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age +=1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    // Object.assign(person.car,{c1:'保时捷',c2:'法拉利'}) car里面的可以直接改
    person.car = {c1:'保时捷',c2:'法拉利'}
  }

  // 监视响应式对象的某个属性，且该属性是基本类型的，要写成函数式
  /* watch(()=> person.name,(newValue,oldValue)=>{
     console.log('person被修改了',newValue,oldValue)
   })
  */

  // 监视响应式对象的某个属性，且该属性是对象的，可以直接写  person.car 这样只能监视细枝末节  优先函数式
  watch(() => person.car,(newValue,oldValue)=>{
     console.log('car被修改了',newValue,oldValue)
   },{deep:true})


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
