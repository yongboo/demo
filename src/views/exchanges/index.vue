// 交易所列表数据
<template>
  <div class="app-container">
    <el-row class="ad-container">
      <el-col :span="8"><div class="grid-content bg-purple">ad 1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">ad 2</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">ad 3</div></el-col>
    </el-row>
    <el-container>
      <el-main>
        <el-row class="hot-exs-container"><!-- 头部三个活跃交易所实时交易数据 -->
          <el-col :span="8"><div class="grid-content bg-purple">活跃交易所 1</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light">活跃交易所 2</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">活跃交易所 3</div></el-col>
        </el-row>
        <!-- 交易概览表 -->
        <exs-table></exs-table>
      </el-main>
      <el-aside width="320px">Aside</el-aside>
    </el-container>
  </div>
</template>

<script>
import ExsTable from '@/components/Tables/ExsTable'
export default {
  name: 'coins',
  components: {
    ExsTable
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
.hot-exs-container{
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

