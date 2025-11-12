<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<!-- v-show="toy"  toy空的时候不显示 -->
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- 传递props给子组件 -->
		<Child :car="car" :sendToy="getToy"/>
  </div>
</template>  

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	// 数据
	let car = ref('奔驰')
	let toy = ref('')
	// 方法
	function getToy(va:string){
		toy.value = va
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>