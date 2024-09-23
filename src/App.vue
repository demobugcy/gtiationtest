<script setup>
</script>

<template>
  <main>
    <RouterView />
  </main>
  <el-backtop :right="100" :bottom="100" />
</template>


<style scoped>
main{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
