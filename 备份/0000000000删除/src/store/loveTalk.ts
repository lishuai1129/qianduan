import { defineStore } from "pinia"
import axios from "axios"
import { nanoid } from "nanoid"
import { reactive } from "vue"

// 选项式
// 第一个分类id ,函数
/* export const useTalkStore = defineStore('talk', {
  actions: {
    // 直接写方法名
    async getLoveTalk() {
      // 发请求
      let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 把请求来的字符串,包装成一个对象
      let obj = { id: nanoid(), title }
      // 添加到数组中 unshift将元素添加到数组开头
      this.talkList.unshift(obj)
    }

  },
 */  // 真正存储数据的地方
/* state() {
  return {
     talkList: [
      { id: 'asd01', title: '你今天很乖' },
      { id: 'asd02', title: '草莓,蓝莓,蔓越莓' },
      { id: 'asd03', title: '死心踏地' },
    ] 
    //  JSON.parse 将字符串解析为 JavaScript 对象或数组
    talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
  }
}
}) */

// 组合式
export const useTalkStore = defineStore('talk', () => {
  // talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )
  // getATalk相当于action
  async function getATalk() {
    // 发请求
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求来的字符串,包装成一个对象
    let obj = { id: nanoid(), title }
    // 添加到数组中 unshift将元素添加到数组开头
    talkList.unshift(obj)
  }
  // 最后要return
  return { talkList, getATalk }

})