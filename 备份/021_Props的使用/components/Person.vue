<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id">
        {{ p.name }} -- {{ p.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  // defineProps可以不用引入 属于宏函数
  import { withDefaults } from 'vue';  
  import { type Persons } from '@/types';

  //  只接受
  // defineProps(['list'])

  // 接受list+限制类型
  // defineProps<{list: Persons}>()

  // 接受list+限制类型+限制必要性+指定默认值
  withDefaults(defineProps<{list?:Persons}>(),{
    // list: [{id:qwwe01,name:'张三sansna',age:19}]  后面要返回一个值
    list: ()=> [{id:'qwwe01',name:'张三sansna',age:19}]
  })


  //接受list同时将props保存起来
  /* let x = defineProps(['a','list'])
  console.log(x.list) */






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
