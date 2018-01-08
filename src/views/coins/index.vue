<template>
  <div class="app-container">
    <el-row class="ad-container">
      <el-col :span="8"><div class="grid-content bg-purple">ad 1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">ad 2</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">ad 3</div></el-col>
    </el-row>
    <el-container>
      <el-main>
        <el-row class="hot-coins-container"><!-- 头部三个热币走势图 -->
          <el-col :span="8"><div class="grid-content bg-purple">热币行情 1</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light">热币行情 2</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">热币行情 3</div></el-col>
        </el-row>
        <!-- 货币流通行情表 -->
        <coins-table></coins-table>
      </el-main>
      <el-aside width="320px">Aside</el-aside>
    </el-container>
  </div>
</template>

<script>
import CoinsTable from '@/components/Tables/CoinsTable'
export default {
  name: 'coins',
  components: {
    CoinsTable
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.ad-container{
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 90px;
  }
}
.hot-coins-container{
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
    .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 90px;
  }
}

</style>

