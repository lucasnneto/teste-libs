<script setup lang="ts">
// import { usePine } from "pine-btree";
// const pine = usePine();
// console.log('pine', pine.color);
const msg: string = "1";
</script>

<template>
  <Component1 :msg="msg" />
  <PineBtn :nova="1"></PineBtn>
</template>
