<template>
   <Person/>
</template>
  
<script lang="ts" >
import Person from './components/Person.vue';
export default {
  name: "App",
  components:{Person} //注册组件
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