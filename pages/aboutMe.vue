<template>
    <div class="indexContent">
        <el-scrollbar class="scroller-box" id="scroller-box" >
            <div class="cover">
                <div class="userInfo">
                    <h1>Insper</h1>
                    <p class="preTitle">每天进步一点点</p>
                    <div class="logo">
                        <router-link to="/"></router-link>
                    </div>
                </div>
                <div class="pageDown" @click="pageDown()">
                    <i class="el-icon-arrow-down"></i>
                </div>
            </div>
            <div class="userIntro">
                <div class="content">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="left">
                                <img src="http://demo.cssmoban.com/cssthemes5/cpts_1432_cid/images/avator.jpg" alt="">
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="right">
                                <h2>about me</h2>
                                <p>I'm a passionate designer, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In 2015, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe in voluptate velit esse cillum dolore eu.</p>
                                <div class="processerWrapper">
                                    <li>
                                        <h6>HTML/CSS</h6>
                                        <el-progress :stroke-width="stokeWith" :percentage="percentage" :color="customColor"></el-progress>
                                    </li>
                                    <li>
                                        <h6>JAVASCRIPT</h6>
                                        <el-progress :stroke-width="stokeWith" :percentage="percentage" :color="customColor"></el-progress>
                                    </li>
                                    <li>
                                        <h6>WEBPACK</h6>
                                        <el-progress :stroke-width="stokeWith" :percentage="percentage" :color="customColor"></el-progress>
                                    </li>
                                    <li>
                                        <h6>NODE</h6>
                                        <el-progress :stroke-width="stokeWith" :percentage="percentage" :color="customColor"></el-progress>
                                    </li>
                                    <li>
                                        <h6>VUE</h6>
                                        <el-progress :stroke-width="stokeWith" :percentage="percentage" :color="customColor"></el-progress>
                                    </li>
                                    <li>
                                        <h6>SASS</h6>
                                        <el-progress :stroke-width="stokeWith" :percentage="percentage" :color="customColor"></el-progress>
                                    </li>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="education">
                <div class="content">
                    <div class="title">
                        education
                    </div>
                    <div class="timeLine">
                        <el-timeline>
                            <el-timeline-item timestamp="2014/9/1~2018/7/1" placement="top">
                            <el-card>
                                <h4>华中科技大学</h4>
                                <p>专业：电子信息工程</p>
                                <p>主修课程：《计算机网络》《微机原理》《数据结构》《操作系统》《C语言基础》</p>
                                <p>选修课程：《JAVA基础》《数据库基础》</p>
                                <p>自学课程：《前端开发基础》</p>
                            </el-card>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/7/1~至今" placement="top">
                            <el-card>
                                <h4>社会大学</h4>
                                <p>专业：前端开发工程师</p>
                                <p>主修课程：《前端开发》</p>
                                <p>选修课程：《全栈开发》</p>
                                <p>想学课程：《女朋友寻找指南》《颈椎拯救指南》《头发保养与护理》</p>
                            </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
            </div>
            <div class="hobby">
                <div class="content">
                    <div class="title">hobby</div>
                    <div class="imgWrapper">
                        <el-row :gutter="30">
                            <el-col :span="8" >
                                <div class="item">
                                    <img src="../static/img/1.jpg" alt="">
                                    <div class="card-inner">
                                        <p>男人从未变过，以前是玩具，现在是电子产品</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="../static/img/6-3.jpg" alt="">
                                    <div class="card-inner">
                                        <p>我有两大爱好：逛吃 ~ 逛吃 ~ </p>
                                    </div>
                                </div>
                                
                            </el-col>
                            <el-col :span="8" >
                                <div class="item">
                                    <img src="../static/img/2.jpg" style="height:420px;" alt="">
                                    <div class="card-inner">
                                        <p>书籍是人类进步的阶梯</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="../static/img/3.jpg" alt="">
                                    <div class="card-inner">
                                        <p>谁充钱谁傻。呵，真香！</p>
                                    </div>
                                </div>
                                
                            </el-col>
                            <el-col :span="8">
                                <div class="item">
                                    <img src="../static/img/6-2.jpg" alt="">
                                    <div class="card-inner">
                                        <p>旅行的意义就在于：和喜欢的人一起经历一段路程，这就够了。</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="../static/img/6-1.png" alt="">
                                    <div class="card-inner">
                                        <p>一壶茶，一包烟，一个参数传一天</p>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
            <bk-footer></bk-footer>
        <transition name="el-fade-in">
            <div class="page-component-up" @click="scrollToTop" v-show="toTopShow">
            </div>
        </transition>
        </el-scrollbar>
    </div>
</template>
<script>
// @ is an alias to /src
import bkFooter from '@/components/public/footer.vue'

export default {
    layout : 'aboutMe',
  components: {
    bkFooter
  },
  data() {
      return {
        toTopShow: false,
        customColor:'#222',
        percentage: 80,
        stokeWith:8
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
            _that.scrollTop -= 50
            document.getElementById("scroller-box").children[0].scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
            _that.toTopShow = false
          }
        })
      },
      pageDown(){
          let timer = null, _that = document.getElementById("scroller-box").children[0];
          let pageH = document.getElementById("scroller-box").offsetHeight;
        //动画，使用requestAnimationFrame代替setInterval
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn2() {
          if (_that.scrollTop < pageH) {
            _that.scrollTop += 50
            // document.getElementById("scroller-box").children[0].scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn2)
          } else {
              _that.scrollTop = pageH;
            cancelAnimationFrame(timer)
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
<style lang="scss" scoped>
    .indexContent{
        height: 100vh;
        .scroller-box{
            height: 100%;
            .cover{
                height: 100vh;
                background-image: url('../static/img/bg.jpg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
                position: relative;
                .userInfo{
                    position: absolute;
                    background-color: rgba(0,0,0,.85);
                    width: 100%;
                    height: 100%;
                    .logo{
                        // position: absolute;
                        width: 240px;
                        height: 240px;
                        background-image: url('../static/img/insper.png');
                        background-size: 100% 100%;
                        margin: auto;
                        margin-top: -60px;
                        a{
                            display: block;
                            height: 100%;
                        }
                    }
                    h1{
                        font-size: 64px;
                        color:#fff;
                        text-align: center;
                        margin-top: 36vh;
                        text-transform: uppercase;
                        text-shadow: 0 0 16px rgba(0, 0, 0, 0.4);
                    }
                    .preTitle{
                        color: #ccc;
                        margin-top: 20px;
                        text-align: center;
                    }
                }
                .pageDown{
                    position: absolute;
                    display: table;
                    width: 100px;
                    height: 50px;
                    background: rgba(175, 175, 175, 0.2);
                    left: 50%;
                    bottom: 0;
                    margin-left: -50px;
                    border-radius: 50px 50px 0 0px;
                    z-index: 3;
                    overflow: hidden;
                    i{
                        position: relative;
                        display: table-cell;
                        vertical-align: middle;
                        text-align: center;
                        font-size: 40px;
                        font-weight: bold;
                        color: #fff;
                        text-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
                        -webkit-animation: down 1.8s infinite;
                        animation: down 1.8s infinite;
                    }
                }
            }
            .userIntro{
                background-color: #fff;
                .content{
                    width: 1200px;
                    margin: auto;
                    padding: 90px 0;
                    font-family: 'Roboto', sans-serif;
                    .processerWrapper{
                        li{ 
                            margin-top: 20px;
                            list-style: none;
                            h6{
                                font-size: 16px;
                                font-weight: bold;
                                color: #000;
                            }
                        }
                    }
                    .right{
                        text-align: left;
                        h2{
                            font-size: 24px;
                            font-weight: bold;
                            text-transform: uppercase;
                            margin-bottom: 25px;
                        }
                        p{
                            font-size: 17px;
                            color: #888;
                            line-height: 27px;
                            
                        }
                    }
                }
            }
            .education{
                background: #f9fbfd;
                .content{
                    .title{
                        font-size: 24px;
                        font-weight: bold;
                        color: #43485c;
                        text-align: center;
                        height: 127px;
                        line-height: 127px;
                        border: 1px solid #eee;
                        text-transform: uppercase;
                    }
                    .timeLine{
                        width: 1200px;
                        margin: auto;
                        padding: 20px 0;
                        
                        .el-timeline{
                            width: 50%;
                            margin: auto;
                            text-align: left;
                            color: #999fb3;
                            .el-timeline-item__timestamp {
                                color: #909399;
                                line-height: 1;
                                font-size: 16px!important;
                            }
                            h4{
                                font-size: 18px;
                                font-weight: bold;
                                margin-bottom: 16px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            p{
                                line-height: 24px;
                            }
                        }
                    }
                }
            }
            .hobby{
                background-color: #fff;
                .content{
                    .title{
                        font-size: 24px;
                        font-weight: bold;
                        color: #43485c;
                        text-align: center;
                        height: 127px;
                        line-height: 127px;
                        border: 1px solid #eee;
                        text-transform: uppercase;
                    }
                    .imgWrapper{
                        width: 1200px;
                        padding: 30px 0;
                        margin: auto;
                        .item{
                            position: relative;
                            img{
                                width: 100%;
                            }
                            &:hover{
                                .card-inner{
                                    opacity: 0.85;
                                }
                            }
                            .card-inner{
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                left: 0;
                                top: 0;
                                overflow: hidden;
                                background-color: rgba(0, 0, 0, 0.8);
                                opacity: 0;
                                perspective: 100px;
                                transition: all 0.5s ease 0s;
                                p{
                                    position: absolute;
                                    left: 50%;
                                    top: 50%;
                                    transform: translate(-50%,-50%);
                                    color: #eee;
                                    line-height: 24px;
                                }
                            }
                        }
                        
                    }
                }
            }
        }
    }
    @keyframes down{
        0%{
            opacity: 0;
            top: 0;
        }
        60%{
            opacity: 1;
            top:10px;
        }
        75%{
            top: 0;
            opacity: 1;
        }
        100%{
            top:10px;
            opacity: 1;
        }
    }
</style>

