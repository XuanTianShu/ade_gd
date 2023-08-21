<template>
    <div class="demo">
        <div class="search">
            <el-input class="input" v-model="num" @blur="cheackNum" placeholder="请输入个数..." clearable />
            <el-button @click="getList">确认</el-button>
        </div>
        <div class="main">
            <ListDemo v-if="!isLoading" :msg="num"></ListDemo>
            <div v-else v-loading="isLoading" element-loading-text="Loading..." style="width: 100%;margin-top: 40%;" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import ListDemo from '@/components/List.vue'

let num = ref('')
let isLoading = ref(true)
// 初始化数据模拟
let getList = () => {
    let input = parseInt(num.value)
    setTimeout(() => {//延迟0.5s
        if (input) {
            isLoading.value = false
        } else {
            isLoading.value = true
        }
    }, 500)
}
// 校验数字
let cheackNum = () => {
    let reg = /^[0-9]*$/
    if (!reg.test(num.value)) {
        alert('请输入数字')
        num = ref('')
    }
}



</script>

<style scoped>
@import "@/assets/css/view/home.css";
</style>
