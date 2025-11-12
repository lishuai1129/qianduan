<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
        <!-- <RouterLink :to="{path:'/news/detail?a=哈哈&b=你好'}" >{{ news.title }}</RouterLink> -->
        <li v-for="news in newsList" :key="news.id" >
          
          <button @click="showNewsDetail(news)">查看新闻</button>
           <!-- to对象写法 -->
           <RouterLink
            :to="{
                // path:'/news/detail',
                // 只能用name
                name:'xiang',
                query:{
                  // 不能传对象和数组
                  id:news.id,
                  title:news.title,
                  content:news.content
                }
            }" 
           >
           {{ news.title }}
          </RouterLink>
        </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { ref,reactive } from 'vue' 
  import { RouterView,RouterLink,useRouter } from 'vue-router';
  const newsList = reactive([
    {id:'asd1',title:'抗癌食物',content:'西兰花'},
    {id:'asd2',title:'如何一夜暴富',content:'学it'},
    {id:'asd3',title:'震惊，万万没想到',content:'明天周一'},
    {id:'asd4',title:'好消息',content:'快过年了'}
  ])  

  const router = useRouter()

  interface NewsInter {
    id:string,
    title:string,
    content:string
  } 

  // 编程式路由导向
  function showNewsDetail(news:NewsInter){
    // 使用push
    router.push({
       name:'xiang',
        query:{
          // 不能传对象和数组
        id:news.id,
        title:news.title,
        content:news.content
      }
    })
  }



  
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}

.news li::marker{
  color: #64967E;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>