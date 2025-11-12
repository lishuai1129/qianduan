import { defineStore } from "pinia"

// 第一个分类id ,函数
export const useTalkStore = defineStore('talk', {
  // 真正存储数据的地方
  state() {
    return {
      talkList: [
        { id: 'asd01', title: '你今天很乖' },
        { id: 'asd02', title: '草莓,蓝莓,蔓越莓' },
        { id: 'asd03', title: '死心踏地' },
      ]
    }
  }
})