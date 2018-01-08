<template>
  <div class="app-wrapper">
    <headerbar class="headerbar-container"></headerbar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Headerbar, AppMain } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    Headerbar,
    AppMain
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f4f5f5;
}
</style>
