<template>
  <Person v-if="isShow"/>
</template>
  
<script lang="ts" setup name="App" >
  import Person from './components/Person.vue';
  import { ref,onMounted } from 'vue';

  let isShow = ref(true)

  // 挂在完毕 子先挂在完毕
  onMounted(()=>{
    console.log('父--挂载完毕')
  })

</script>

<style >
.app {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>