<template>
  <div class="header">
    <div class="headerWrapper">
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="6">
            <nuxt-link to="/"
              ><img class="logo" src="../../static/img/insper.png" alt="" />
              <h1>Insper 的个人博客</h1></nuxt-link
            >
          </el-col>
          <el-col :span="15">
            <el-row class="hd-content" :gutter="0">
              <nuxt-link to="/">
                <el-col :span="4">网站首页</el-col>
              </nuxt-link>
              <nuxt-link to="/typeArticleList?type=blog">
                <el-col :span="6">个人博客日记</el-col>
              </nuxt-link>
              <nuxt-link to="/aboutMe">
                <el-col :span="4">关于我</el-col>
              </nuxt-link>
              <nuxt-link to="/timeLine">
                <el-col :span="4">时间轴</el-col>
              </nuxt-link>
              <!-- <nuxt-link to="/blogRoute">
                <el-col :span="3">博客导航</el-col>
              </nuxt-link> -->
              <nuxt-link to="/leaveMessage">
                <el-col :span="4">留言</el-col>
              </nuxt-link>
            </el-row>
          </el-col>
          <el-col class="search" :span="3">
            <img @click="closeSearchBar()" src="../../static/img/bg.png" alt=""/>
          </el-col>
        </el-row>
      </div>
    </div>

    <div v-if="show" class="searchBar">
      <div class="content">
        <input class="search" placeholder="请输入关键词" type="text" /><input
          class="searchBtn"
          type="button"
          value="搜索"
        />
      </div>
      <div @click="closeSearchBar()" class="close">X</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeSearchBar() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  &::before {
    background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
    content: "";
    height: 5px;
    display: block;
  }
  .headerWrapper {
    background-color: #1C2327;
  }
  .searchBar {
    width: 1200px;
    margin: 10px auto;
    overflow: hidden;
    background: #fff;
    position: relative;
    &:hover{
      box-shadow: 0px 0px 24px rgba(0,0,0,0.2);
    }
    .close {
      position: absolute;
      top: 6px;
      right: 6px;
      font-size: 24px;
      font-weight: bold;
      color: #999;
      cursor: pointer;
    }
    .close:hover {
      color: #000;
    }
    .content {
      height: 78px;
      width: 50%;
      
      input {
        display: inline-block;
        vertical-align: middle;
        border: 0;
        line-height: 36px;
        height: 36px;
        outline: none;
        margin-top: 18px;
      }
      .search {
        width: 72%;
        border: 1px solid #ccc;
        text-align: left;
        box-sizing: border-box;
        padding-left: 10px;
        color: #333;
      }
      .searchBtn {
        background-color: #000;
        color: #fff;
        width: 28%;
      }
    }
  }
}
.logo {
  width: 140px;
  height: 140px;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  left: -100px;
  top: -49px;
}
.content {
  width: 1200px;
  margin: 0 auto;
  color: #fff;
}
.el-col {
  line-height: 60px;
  a {
    text-decoration: none;
  }
}
.el-col h1 {
  line-height: 60px;
  font-size: 24px;
  text-align: left;
  color: #fff;
  font-weight: normal;
  margin: 0;
}
.search {
  text-align: right;
  img {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
}
.hd-content {
  a {
    .el-col {
      color: #fff;
    }
  }
  .nuxt-link-exact-active {
    .el-col {
      color: #00c1de;
    }
  }
  a:hover {
    .el-col {
      color: #00c1de;
    }
  }
}
</style>

