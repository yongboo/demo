<template>
  <div class="content" id="scrollBox">
    <div id="box1">
      <a href="#"> <span class="notice">1.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">2.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">3.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">4.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">5.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">6.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">7.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">8.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">9.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
      <a href="#"> <span class="notice">10.OKEx上线Theta (THETA)的公告</span> <span class="time">01-17 10:31</span></a>
    </div>
    <div id="box2"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollNotice',

  mounted() {
    this.handleScroll()
  },
  methods: {
    handleScroll() {
      const area = document.getElementById('scrollBox')
      const box1 = document.getElementById('box1')
      const box2 = document.getElementById('box2')
      const time = 50
      area.scrollTop = 0
      box2.innerHTML = box1.innerHTML
      function upScroll() {
        if (area.scrollTop >= box1.offsetHeight) {
          area.scrollTop = 0
        } else {
          area.scrollTop++
        }
      }
      let myScroll = setInterval(upScroll, time)
      area.onmouseover = function() {
        clearInterval(myScroll)
      }
      area.onmouseout = function() {
        myScroll = setInterval(upScroll, time)
      }
    }
  }

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/styles/variables.scss';
.content{
  height: 185px;
  overflow: hidden;
  a{
    color: #33353c;
    display: inline-block;
    font-size: 14px;
    padding:6px 0;
    width: 100%;
    .notice{
      max-width: 210px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .time{
      float: right;
      color:#909399;
    }
    &:hover{
      color: $blueColor;
    }
  }
}
</style>

