<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="tlak in talkStore.talkList" :key="tlak.id">{{ tlak.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import {useTalkStore} from '@/store/loveTalk'
// console.log(talkList);

const talkStore = useTalkStore()
// 方法
async function getLoveTalk(){
  talkStore.getLoveTalk()
}


</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px ;
}
</style>