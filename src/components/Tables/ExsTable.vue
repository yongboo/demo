// 交易所列表
<template>
  <div class="exchanges-table"><!-- 货币列表 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">默认</el-menu-item>
      <el-menu-item index="2">自选</el-menu-item>
      <el-menu-item index="3">热度</el-menu-item>
      <el-menu-item index="4">交易对数</el-menu-item>
      <el-submenu index="5">
        <template slot="title">交易类型</template>
        <el-menu-item index="5-1">全部</el-menu-item>
        <el-menu-item index="5-2">现货</el-menu-item>
        <el-menu-item index="5-3">期货</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">所在地</template>
        <el-menu-item index="6-1">全部</el-menu-item>
        <el-menu-item index="6-2">中国</el-menu-item>
        <el-menu-item index="6-3">美国</el-menu-item>
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
    <div class="exchanges-list">
      <el-row>
        <el-col :span="3" class="icon">
          <router-link :to="'/exchange/' + 'huobipro'"><img src="../../assets/ex_imgs/huobipro.png"></router-link>
        </el-col>
        <el-col :span="21">
          <router-link :to="'/exchange/' + 'huobipro'" class="title">火币Pro</router-link>
          <span class="region">&nbsp;/&nbsp;中国</span>
          <p class="content">火币全球专业站，是火币集团旗下服务于全球专业交易用户的创新数字资产交易平台，致力于发现优质的创新数字资产投资机会，目前提供四十多种数字资产品类的交易及投资服务，总部位于新加坡，由火币全球专业站团队负责运营</p>
          <div class="other-info">
            <span>成交额(24h):<router-link :to="'/exchange/' + 'huobipro'">¥1,021,291万</router-link></span>
            <span class="line">/</span>
            <span>交易对:<router-link :to="'/exchange/' + 'huobipro'">99</router-link></span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="icon">
          <router-link :to="'/exchange/' + 'huobipro'"><img src="../../assets/ex_imgs/huobipro.png"></router-link>
        </el-col>
        <el-col :span="21">
          <router-link :to="'/exchange/' + 'huobipro'" class="title">火币Pro</router-link>
          <span class="region">&nbsp;/&nbsp;中国</span>
          <p class="content">火币全球专业站，是火币集团旗下服务于全球专业交易用户的创新数字资产交易平台</p>
          <div class="other-info">
            <span>成交额(24h):<router-link :to="'/exchange/' + 'huobipro'">¥1,021,291万</router-link></span>
            <span class="line">/</span>
            <span>交易对:<router-link :to="'/exchange/' + 'huobipro'">99</router-link></span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="icon">
          <router-link :to="'/exchange/' + 'huobipro'"><img src="../../assets/ex_imgs/huobipro.png"></router-link>
        </el-col>
        <el-col :span="21">
          <router-link :to="'/exchange/' + 'huobipro'" class="title">火币Pro</router-link>
          <span class="region">&nbsp;/&nbsp;中国</span>
          <p class="content"></p>
          <div class="other-info">
            <span>成交额(24h):<router-link :to="'/exchange/' + 'huobipro'">¥1,021,291万</router-link></span>
            <span class="line">/</span>
            <span>交易对:<router-link :to="'/exchange/' + 'huobipro'">99</router-link></span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div><!-- 货币列表 end -->
</template>

<script>
// import { formatCurrency } from '@/utils/common'
export default {
  name: 'ExsTable',
  data() {
    return {
      activeIndex: '1',
      tableData: [{
        name: '火币Pro',
        circ_value: '火币全球专业站，是火币集团旗下服务于全球专业交易用户的创新数字资产交易平台，致力于发现优质的创新数字资产投资机会，目前提供四十多种数字资产品类的交易及投资服务，总部位于新加坡，由火币全球专业站团队负责运营',
        price: '107581',
        circ_number: '1671',
        increase_24: '-12.01',
        trans_vol: '16042181',
        price_trend: ''
      }]
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .exchanges-list{
    margin-top: 12px;
    .el-row{
      padding: 12px 6px 12px 6px;
      border-bottom: dashed 1px #e6e6e6;
    }
    .icon{
      a{
        display: inline-block;
        img{
          width: 48px;
          height: 48px;
        }
      }
    }
    .title{
      color: #409EFF;
      font-size: 18px;
      font-weight: 600;
    }
    .region{
      font-size: 13px;
      color:#888888;
    }
    .content{
      font-size: 14px;
      letter-spacing: 1px;
      color: #7f8c8d;
      font-style: italic;
      line-height: 1.6;
      margin: 8px 0;
    }
    .other-info{
      span{
        font-size: 15px;
        a{
          padding-left: 1px;
        }
      }
      .line{
        color: #888888;
        font-size: 12px;
        padding: 0 2px;
      }
    }
  }
  .el-pagination{
    float: right;
    margin-top: 8px;
  }
</style>




