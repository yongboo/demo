<template>
  <div>
    <el-menu mode="horizontal" class="navbar" unique-opened :default-active="$route.path"  background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <headerbar-item :routes="routes"></headerbar-item>
      <authbar></authbar>
    </el-menu>
  </div>
</template>

<script>
import HeaderbarItem from './HeaderbarItem'
import Authbar from './Authbar'

export default {
  components: { HeaderbarItem, Authbar },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>
