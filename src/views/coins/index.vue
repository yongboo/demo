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
      <el-aside width="320px">
        <div class="section" style="height: 360px;">
          <div class="title">交易所最新公告</div>

        </div>
        <div class="section" style="height: 120px;">AD</div>
        <div class="section up-down-section" style="height: 300px;">
          <el-tabs v-model="activeTabName" @tab-click="upDownTabClick">
            <el-tab-pane label="涨幅榜" name="up">
                <div style="margin-top: 2px; text-align:center;">
                  <el-radio-group v-model="activeUpRadio" @change="upTimeChange" size="small">
                    <el-radio-button label="1小时"></el-radio-button>
                    <el-radio-button label="24小时"></el-radio-button>
                    <el-radio-button label="一周"></el-radio-button>
                  </el-radio-group>
                </div>
            </el-tab-pane>
            <el-tab-pane label="跌幅榜" name="down">
              <div style="margin-top: 2px; text-align:center;">
                <el-radio-group v-model="activeDownRadio" @change="downTimeChange" size="small">
                  <el-radio-button label="1小时"></el-radio-button>
                  <el-radio-button label="24小时"></el-radio-button>
                  <el-radio-button label="一周"></el-radio-button>
                </el-radio-group>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="up-dowm-list">{{up_down_list}}</div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import CoinsTable from '@/components/Tables/CoinsTable'
export default {
  name: 'coins',
  data() {
    return {
      activeUpDownTab: 'pane-up', // 默认是涨幅榜开启
      activeTabName: 'up',
      activeUpRadio: '24小时',
      activeDownRadio: '24小时',
      up_down_list: undefined
    }
  },
  components: {
    CoinsTable
  },
  mounted() {
    this.up_down_list = '涨幅榜24小时榜单'
  },
  methods: {
    upDownTabClick(tab, event) { // 涨跌幅tab切换
      const activeTabId = tab.$el.id
      if (activeTabId === 'pane-up') {
        this.up_down_list = '涨幅榜24小时榜单'
      } else if (activeTabId === 'pane-down') {
        this.up_down_list = '跌幅榜24小时榜单'
      }
    },
    upTimeChange(labeName) { // 涨幅榜时间切换
      this.up_down_list = '涨幅榜' + labeName + '榜单'
    },
    downTimeChange(labeName) { // 跌幅榜时间切换
      this.up_down_list = '跌幅榜' + labeName + '榜单'
    }
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
.up-down-section{
    .up-dowm-list{
      padding: 6px;
      margin-top: 12px;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss">
.up-down-section{
  .el-tabs__nav{
    width: 100%;
    .el-tabs__item{
      width: 50%;
      text-align: center;
    }
  }
}
</style>


