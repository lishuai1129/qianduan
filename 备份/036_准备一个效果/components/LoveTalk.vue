<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="tlak in talkList" :key="tlak.id">{{ tlak.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { reactive } from 'vue';
import axios from "axios";
import { nanoid } from 'nanoid';
let talkList = reactive([
  {id:'asd01',title:'你今天很乖'},
  {id:'asd02',title:'草莓,蓝莓,蔓越莓'},
  {id:'asd03',title:'死心踏地'},
])
// console.log(talkList);

// 方法
async function getLoveTalk(){
  // 发请求
  let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  // 把请求来的字符串,包装成一个对象
  let obj = {id:nanoid(),title}
  // 添加到数组中
  talkList.unshift(obj)
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