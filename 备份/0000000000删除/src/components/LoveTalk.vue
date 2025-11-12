<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="tlak in talkList" :key="tlak.id">{{ tlak.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
  import {useTalkStore} from '@/store/loveTalk'
  import { storeToRefs } from 'pinia'
// console.log(talkList);

  const talkStore = useTalkStore()
  const {talkList} = storeToRefs(talkStore)

  // mutate本次修改的信息 atate真正的数据
  talkStore.$subscribe((mutate, state)=>{
    console.log('保存的数据发生变化')
    // JSON.stringify(...)JavaScript 对象或数组转换为 JSON 格式的字符串
    localStorage.setItem('talkList', JSON.stringify(state.talkList))
  })
// 方法
  async function getLoveTalk(){
    talkStore.getATalk()
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