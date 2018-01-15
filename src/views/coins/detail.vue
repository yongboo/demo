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
          <el-col class="coin-name" :span="24">
            <img src="../../assets/coin_imgs/btc.png">
            Bitcoin 比特币
          </el-col>
        </el-row>
        <el-row class="coin-trad-info">
          <el-col class="price rise-color" :span="7">
            <strong>￥109,642</strong>
            <span>+0.6%</span>
          </el-col>
          <el-col :span="5">
            <div>24H最高:<span>￥112,905</span></div>
            <div>24H最低:<span>￥112,905</span></div>
          </el-col>
          <el-col :span="6">
            <div>24H成交量(LTC):<span>1968.09</span></div>
            <div>24H成交额(BTC):<span>33.19</span></div>
          </el-col>
          <el-col :span="6">
            <div>流通市值:<span>¥1,803,534,105,240</span></div>
            <div>≈$277,552,186,094</div>
            <div>≈17,015,187BTC</div>
          </el-col>
        </el-row>
        <!-- k线图 -->
        <div id="container" class="kline-container" style="width: 788px;height:320px;"></div>
        <!-- 上架交易所行情 -->
        <coin-exs-table></coin-exs-table>
      </el-main>
      <el-aside width="320px">
        <div class="section">
          <div class="title">简介</div>
          <p class="content">比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络。比特币是一种P2P形式的数字货币</p>
          <p>
            <span class="sub-title">网站：</span>
            <a href="https://bitcoin.org/" rel="nofollow" target="_blank">网站1</a>
            <a href="https://www.bitcoin.com/" rel="nofollow" target="_blank">网站2</a>
          </p>
          <p>
            <span class="sub-title">白皮书：</span>
            <a href="http://www.bitcoin.org/bitcoin.pdf" target="_blank" rel="nofollow">http://www.bitcoin.org/bitcoin.pdf</a>
          </p>
          <p>
            <span class="sub-title">区块站：</span>
            <a href="http://blockchain.info" rel="nofollow" target="_blank">区块站1</a>
            <a href="https://blockexplorer.com/" rel="nofollow" target="_blank">区块站2</a> 
          </p>
          <p>
            <span class="sub-title">发布时间：</span>
            2008-11-01
          </p>
          <p>
            <span class="sub-title">上架交易所：</span>
            <a href="#">165家</a>
          </p>
        </div>
        <div class="section">
          <div>AD</div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { createKline } from '@/utils/charts'
import CoinExsTable from '@/components/Tables/CoinExsTable'
// import { getCoinDataById } from '@/api/coin'
export default {
  name: 'coin-detail',
  components: {
    CoinExsTable
  },
  mounted() {
    // Highcharts.chart('container', this.options)
    this.fetchCoinDateById()
  },
  methods: {
    fetchCoinDateById() {
      createKline('container')
      // let seriesCounter = 0
      // let names = ['MSFT', 'AAPL', 'GOOG']
      // names.forEach(name => {
      //  let url = 'https://data.jianshukeji.com/jsonp?filename=json/' + name.toLowerCase() + '-c.json'
      //   getCoinDataById(url).then(response => {
      //     seriesOptions[i] = {
      //       name: name,
      //       data: response
      //      }
      //     seriesCounter += 1;
      //     if (seriesCounter === names.length) {
      //       createKline(seriesOptions);
      //     }
      //   })
      // });
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
.coin-name{
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  padding-bottom: 8px;
  img{
    position: relative;
    top: 4px;
    width: 24px;
    height: 24px;
  }
}
.coin-trad-info{
  margin-bottom: 12px;
  font-size: 13px;
  .el-col div{
    &:first-child{
      padding-bottom: 4px;
    }
    span{
      font-weight: 700;
      padding-left: 4px;
    }
  }
  .price{
    padding: 2px 0;
    font-size:32px;
    text-align: center;
    span{
      font-size: 12px;
    }
  }
}
// .coin-other-info{
//     font-size: 14px;
//     .title{
//       font-size: 16px;
//       font-weight: 700;
//       padding-left: 6px;
//       margin-left: -6px;
//       margin-top: 6px;
//       border-left: solid 3px #409EFF;
//     }
//     .sub-title{
//       font-weight: 700;
//     }
//     .content{
//       line-height: 20px;
//       margin: 12px 0;
//     }
//   }
.kline-container{
  margin-bottom: 12px;
  border: solid 1px #e6e6e6;
  overflow: hidden;
} 

</style>

