import { defineStore } from "pinia"

export const useCountStore = defineStore('count', {
  // actions放置的是一个一个的方法，用于相应组件中的“动作”
  actions: {
    increment(value: number) {
      console.log('increment被调用了', value)
      // 修改数据
      // console.log(this)
      if (this.sum < 10) {
        this.sum += value
      }

    }
  },
  // 真正存储数据的地方
  state() {
    return {
      sum: 6,
      school: 'cqupt',
      address: '北京'
    }
  }
})