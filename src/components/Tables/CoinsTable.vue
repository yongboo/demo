// 货币流通行情列表
<template>
  <div class="coins-table"><!-- 货币列表 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">默认</el-menu-item>
      <el-submenu index="2">
        <template slot="title" class="xxx">货币</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title" class="xxx">代币</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title" class="xxx">人民币</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
      </el-submenu>
      <!-- 头部分页 -->
      <el-pagination
        small
        background
        layout="total, prev, pager, next"
        :page-size="20"
        :total="500">
      </el-pagination><!-- 头部分页 end-->
    </el-menu>
    <!-- 货币表格 -->
    <el-table
      :data="tableData"
      stripe
      :cell-class-name = "tableCellClassName"
      :default-sort = "{prop: 'circ_value', order: 'descending'}"
      style="width: 100%">
      <el-table-column
        type="index"
        width="24">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="110">
      </el-table-column>
      <el-table-column
        prop="circ_value"
        label="流通市值"
        sortable
        :sort-method="circ_value_sort"
        :formatter="circ_value_formatter"
        width="100">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        sortable
        :sort-method="price_sort"
        :formatter="price_formatter"
        width="80">
      </el-table-column>
      <el-table-column
        prop="circ_number"
        label="流通数量"
        sortable
        :sort-method="circ_number_sort"
        :formatter="circ_number_formatter"
        width="110">
      </el-table-column>
      <el-table-column
        prop="increase_24"
        label="涨幅(24h)"
        sortable
        :sort-method="increase_24_sort"
        :formatter="increase_24_formatter"
        width="110">
      </el-table-column>
      <el-table-column
        prop="trans_vol"
        label="成交额(24h)"
        sortable
        :sort-method="trans_vol_sort"
        :formatter="trans_vol_formatter"
        width="120">
      </el-table-column>
      <el-table-column
        prop="price_trend"
        label="价格趋势(7d)">
      </el-table-column>
    </el-table>
  </div><!-- 货币列表 end -->
</template>

<script>
import { formatCurrency } from '@/utils/common'
export default {
  name: 'CoinListTable',
  data() {
    return {
      activeIndex: '1',
      tableData: [{
        name: 'BTC-比特币',
        circ_value: '1805156743245.2323',
        price: '107581',
        circ_number: '1671',
        increase_24: '-12.01',
        trans_vol: '16042181',
        price_trend: ''
      }, {
        name: 'BTC-比特币',
        circ_value: '18052',
        price: '107582',
        circ_number: '1672',
        increase_24: '12.02',
        trans_vol: '16042182.0',
        price_trend: ''
      }, {
        name: 'BTC-比特币',
        circ_value: '18053.6',
        price: '107583.1',
        circ_number: '1673',
        increase_24: '-12.03',
        trans_vol: '16042183',
        price_trend: ''
      }, {
        name: 'BTC-比特币',
        circ_value: '18054',
        price: '107584',
        circ_number: '80',
        increase_24: '12.04',
        trans_vol: '16042184',
        price_trend: ''
      }, {
        name: 'XRP-瑞波币',
        circ_value: '8034',
        price: '20.74',
        circ_number: '3873915',
        increase_24: '-14.95',
        trans_vol: '4459905',
        price_trend: ''
      }]
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    circ_value_formatter(row, column) {
      return formatCurrency('¥', row.circ_value)
      // console.log(row.circ_value)
      // return '¥' + row.circ_value + '亿'
    },
    price_formatter(row, column) {
      return '¥' + row.price
    },
    circ_number_formatter(row, column) {
      return row.circ_number + '万'
    },
    increase_24_formatter(row, column) {
      return row.increase_24 + '%'
    },
    trans_vol_formatter(row, column) {
      return '¥' + row.trans_vol + '万'
    },
    circ_value_sort(a, b) {
      return parseFloat(a.circ_value) - parseFloat(b.circ_value)
    },
    price_sort(a, b) {
      return parseFloat(a.price) - parseFloat(b.price)
    },
    circ_number_sort(a, b) {
      return parseFloat(a.circ_number) - parseFloat(b.circ_number)
    },
    increase_24_sort(a, b) {
      return parseFloat(a.increase_24) - parseFloat(b.increase_24)
    },
    trans_vol_sort(a, b) {
      return parseFloat(a.trans_vol) - parseFloat(b.trans_vol)
    },
    tableCellClassName({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1 || columnIndex === 3 || columnIndex === 6 || columnIndex === 7) {
        return 'normal'
      } else if (columnIndex === 5) {
        if (parseFloat(row['increase_24']) >= 0) {
          return 'rise'
        } else {
          return 'fall'
        }
      }
      return ''
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-pagination{
    float: right;
    margin-top: 8px;
  }
</style>




