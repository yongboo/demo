<template>
  <div>
    <div class="footer-content">
      <div class="friend-links">
        友情链接：
        <a href="http://www.nsfc.gov.cn/" target="_blank">国自然基金委</a>
        <span>|</span>
        <a href="https://www.ncbi.nlm.nih.gov/pubmed/" target="_blank">Pubmed</a>
        <span>|</span>
        <a href="http://www.icmje.org/" target="_blank">ICMJE</a>
        <span>|</span>
        <a href="http://www.dxy.cn/" target="_blank">丁香园</a>
        <span>|</span>
        <a href="http://www.muchong.com/" target="_blank">小木虫</a>
        <span>|</span>
        <a href="http://www.haodf.com/" target="_blank">好大夫在线</a>
        <span>|</span>
        <a href="http://www.guahao.com/" target="_blank">微医</a>
      </div>
      <div class="company-info">
          <!-- <p>地址：上海市闵行区庙泾路66号K510</p>
          <p>电话：<a href="tel:021-6430-9238">021-6430-9238</a><span>|</span>传真：021-6430-7238</p>
          <p>邮箱：<a href="mailto:service@natusci.com">sci@natuedit.com</a>
          </p> -->
          <p>版权所有 xxx科技有限公司<span>|</span><a target="_blank" href="http://www.miitbeian.gov.cn/">沪ICP备16028500号-1</a>
          </p>
          <!-- <div class="wechat">
              <img src="/images/common/qrcode.jpg">
              <p>关注微信公众号</p>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .footer-content{
    width: 1140px;
    margin: 0 auto;
    .friend-links{
      a{
        padding: 4px 8px;
      }
      span{
        padding: 4px;
      }
    }
    .company-info{
      position: relative;
      margin-top: 20px;
      p{
        margin-bottom: 6px;
        span{
          padding: 0px 8px;
        }
      }
    }
  }
</style>