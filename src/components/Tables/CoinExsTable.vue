// 将某一货币上架的交易所
<template>
  <div class="coin-exs-table"><!-- 货币上架的交易所行情表 -->
    <div class="title">交易市场行情</div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">人民币(CNY)</el-menu-item>
      <el-menu-item index="2">美元(USD)</el-menu-item>
      <el-menu-item index="3">比特币(BTC)</el-menu-item>
      <el-menu-item index="4">以太坊(ETH)</el-menu-item>
      <el-submenu index="5">
        <template slot="title" class="more-currency">更多</template>
        <el-menu-item index="5-1">日元(JPY)</el-menu-item>
        <el-menu-item index="5-2">韩币(KRW)</el-menu-item>
        <el-menu-item index="5-3">港币(HKD)</el-menu-item>
        <el-menu-item index="5-4">卢布(RUB)</el-menu-item>
        <el-menu-item index="5-5">卢比(INR)</el-menu-item>
        <el-menu-item index="5-6">欧元(EUR)</el-menu-item>
        <el-menu-item index="5-7">英镑(GBP)</el-menu-item>
        <el-menu-item index="5-7">澳元(AUD)</el-menu-item>
        <el-menu-item index="5-9">法郎(CHF)</el-menu-item>
        <el-menu-item index="5-10">加元(CAD)</el-menu-item>
      </el-submenu>
      <!-- 头部分页 -->
      <el-pagination
        small
        background
        layout="total, prev, pager, next"
        :page-size="20"
        :total="100">
      </el-pagination><!-- 头部分页 end-->
    </el-menu>
    <!-- 交易所列表 -->
    <el-table
      :data="tableData"
      stripe
      :cell-class-name = "tableCellClassName"
      style="width: 100%">
      <el-table-column
        type="index"
        width="24">
      </el-table-column>
      <el-table-column
        prop="name"
        label="交易所"
        width="110">
         <template slot-scope="scope">
           <router-link :to="'/exchange/' + scope.row.name">{{scope.row.name}}</router-link>
         </template>  
      </el-table-column>
      <el-table-column
        prop="trade_obj"
        label="交易对"
        width="100">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="110">
        <template slot-scope="scope">
           <router-link :to="'/exchange/' + scope.row.name">¥{{scope.row.price}}</router-link>
         </template>
      </el-table-column>
      <el-table-column
        prop="volume"
        label="成交量"
        width="110">
      </el-table-column>
      <el-table-column
        prop="volume_sum"
        label="成交额"
        :formatter="volume_sum_formatter"
        width="110">
      </el-table-column>
      <el-table-column
        prop="proportion"
        label="占比"
        width="80">
      </el-table-column>
      <el-table-column
        prop="update_time"
        label="更新时间">
      </el-table-column>
    </el-table>
  </div><!-- 交易所列表 end -->
</template>

<script>
// import { formatCurrency } from '@/utils/common'
export default {
  name: 'CoinExsTable',
  data() {
    return {
      activeIndex: '1',
      tableData: [{
        name: 'Bitfinex',
        trade_obj: 'BTC/USDT',
        price: '107581',
        volume: '1671',
        volume_sum: '1233483',
        proportion: '5%',
        update_time: '刚刚'
      }, {
        name: '货币Pro',
        trade_obj: 'BTC/USDT',
        price: '107581',
        volume: '1671',
        volume_sum: '34344',
        proportion: '3.01%',
        update_time: '刚刚'
      }, {
        name: '币安网',
        trade_obj: 'BTC/USDT',
        price: '107581',
        volume: '1671',
        volume_sum: '456622',
        proportion: '4.01%',
        update_time: '5分钟前'
      }]
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    circ_number_formatter(row, column) {
      return row.circ_number + '万'
    },
    increase_24_formatter(row, column) {
      return row.increase_24 + '%'
    },
    volume_sum_formatter(row, column) {
      return '¥' + row.volume_sum
    },
    tableCellClassName({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 5) {
        return 'normal-color'
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .coin-exs-table{
    .title{
      font-size: 18px;
      font-weight: 700;
      border-left: solid 4px #409EFF;
      padding-left: 4px;
      margin-bottom: 4px;
    }
  }
  .el-pagination{
    float: right;
    margin-top: 8px;
  }
</style>




