<template>
  <div class="app-container">
    <el-row class="ad-container">
      <el-col :span="8"><div class="grid-content bg-purple">ad 1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">ad 2</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">ad 3</div></el-col>
    </el-row>
    <el-container>
      <el-main>
        <el-row>
          <el-col class="ex_name" :span="24">
            <img src="../../assets/ex_imgs/huobipro.png">
            火币Pro
          </el-col>
        </el-row>
        <el-row class="ex_brief">
          <el-col class="content" :span="24">
            火币全球专业站，是火币集团旗下服务于全球专业交易用户的创新数字资产交易平台，致力于发现优质的创新数字资产投资机会，目前提供四十多种数字资产品类的交易及投资服务，总部位于新加坡，由火币全球专业站团队负责运营
          </el-col>
          <el-col class="other-info" :span="8">
            <span class="title">官网地址：</span>
            <a href="https://www.huobi.pro/" rel="nofollow" target="_blank">https://www.huobi.pro</a>
          </el-col>
          <el-col class="other-info" :span="6">
            <span class="title">国家：</span>
            中国香港
          </el-col>
        </el-row>
        <!-- 交易所上架货币行情 -->
        <ex-coins-table></ex-coins-table>
      </el-main>
      <el-aside width="320px">
        <div class="section volume-section">
          <div class="title">24小时平台成交额</div>
          <p class="volume content">
            <b>¥10,523,685,338</b>
            <span class="ranking">排名NO.6</span>
            <span class="approximate">≈$1,578,552,801&nbsp;≈101,785BTC</span>
          </p>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import ExCoinsTable from '@/components/Tables/ExCoinsTable'
export default {
  name: 'coin-detail',
  components: {
    ExCoinsTable
  },
  mounted() {
    // Highcharts.chart('container', this.options)
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
.ex_name{
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  padding-bottom: 12px;
  img{
    position: relative;
    top: 4px;
    width: 48px;
    height: 48px;
  }
}
.ex_brief{
  font-size: 15px;
  margin-bottom: 12px;
  padding: 0 4px;
  .content{
    line-height: 20px;
    margin-bottom: 8px;
  }
  .other-info{
    .title{
      font-weight: 700;
    }
  }
}
.volume-section{
  .volume{
    font-size: 24px;
    .ranking{
      background-color: #06c;
      font-size: 14px;
      color: #fff;
      padding: 2px 8px;
      border-radius: 4px;
      position: relative;
      top: -2px;
    }
    .approximate{
      font-size: 16px;
    }
  }
}
</style>

