<template>
   <Person ref="ren"/>
   <h2 ref="title2">你好</h2>
   <button @click="showLog">点我输出h2这个元素</button>
   <button @click="show">测试</button>
</template>
  
<script lang="ts" setup name="App" >
  import { ref, onMounted } from 'vue';
  import Person from './components/Person.vue';

  let title2 = ref();
  let ren = ref();

  // 普通标签拿到标签元素 获取的是DOM节点
  function showLog() {
    console.log(title2.value);
  }

  // 拿到子组件的实例对象
  function show() {
    console.log(ren.value);
  }

</script>

<style >
.app {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>