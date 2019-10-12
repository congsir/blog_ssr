<template>
  <div class="home">
    <el-container style="height:100vh;" >
      <el-scrollbar class="scroller-box" id="scroller-box" style="height:100%;width:100%;"> 
        <el-header height="auto">
        <bk-header></bk-header>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer height="auto">
        <bk-footer></bk-footer>
      </el-footer>
      <transition name="el-fade-in">
        <div class="page-component-up" @click="scrollToTop" v-show="toTopShow">
        </div>
      </transition>
      </el-scrollbar>
      
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
import bkHeader from '@/components/public/header.vue'
import bkFooter from '@/components/public/footer.vue'

export default {
  components: {
    bkHeader,
    bkFooter
  },
  data() {
      return {
        toTopShow: false,
      }
    },
  watch: {
    '$store.state.is_toTop'(){
      if(this.$store.state.is_toTop == '1'){
        this.scrollToTop();
      }
    }
  },
    methods: {
      handleScroll() {
        //id scroller-box是自己在组件上添加的，为了方便获取dom
        this.scrollTop = document.getElementById("scroller-box").children[0].scrollTop
        if (this.scrollTop > 300) {
          this.toTopShow = true
        }else {
          this.toTopShow = false
        }
      },
      scrollToTop() {
        let timer = null, _that = this
        //动画，使用requestAnimationFrame代替setInterval
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 100
            document.getElementById("scroller-box").children[0].scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
            _that.toTopShow = false;
            _that.$store.dispatch('de_toTop')
          }
        })
      }
    },
    mounted() {
　　　　//$nextTick 避免dom未加载
      this.$nextTick(function () {
        let targetScroll = document.getElementById("scroller-box").children[0]
        targetScroll.addEventListener('scroll', this.handleScroll)
      });
    },
    destroyed() {
      let targetScroll = document.getElementById("scroller-box").children[0]
      targetScroll.removeEventListener('scroll', this.handleScroll)
    }

}
</script>
 <style lang="scss">
html {  
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}


.el-header{
      padding: 0!important;
    }
    .el-footer{
      padding: 0!important;
    }
    .el-main{
      min-height: 650px;
    }
    body{
      background-color: #E9EAED;
    }
    a{
      text-decoration: none;
    }
    .el-scrollbar__wrap {
     overflow-x: hidden!important;
    }
    .toTop{
      width: 40px;
      height: 40px;
      display: block;
      background: url(../static/img/top.png) no-repeat center #000;
      right: 20px;
      bottom: 10%;
      position: fixed
    }
    .page-component-up{
      cursor: pointer;
      transition: .3s;
      box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
      z-index: 100;
      width: 40px;
      height: 40px;
      display: block;
      background: url(../static/img/top.png) no-repeat center #000;
      right: 20px;
      bottom: 10%;
      position: fixed;
      p{
        display: none;
        text-align: center;
        color: #fff;
      }
      &:hover{ 
        opacity: .8;
      }
    }
    .clearFix::after{
      display: block;
      content:'';
      clear:both;
    }
</style>
