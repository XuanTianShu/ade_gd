<template>
    <div class="listbox">
        <div :style="item" v-for="(item, idx) in list" :key="idx"> {{ idx }}</div>
    </div>
</template>

<script setup>
import { defineProps, toRefs, ref } from 'vue';
const props = defineProps({
    msg: {
        type: String, // 接收的参数类型
        default: 0, //默认值
    }
})

const { msg } = toRefs(props)
let list = []
let len = parseInt(msg.value)
if (len)
    while (len > 0) {
        let color1 = parseInt(Math.random() * 255) + 1
        let color2 = parseInt(Math.random() * 255) + 1
        let color3 = parseInt(Math.random() * 255) + 1
        let children = {
            background: `rgb(${color1},${color2},${color3})`
        }
        list.push(children)
        console.log(children);
        len--
    }


</script>

<style scoped>
@import "@/assets/css/component/list.css";
</style>