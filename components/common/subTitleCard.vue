<template>
  <div class="wrapper">
    <div class="content">
      <div class="left">
        <img src="http://jxhx2.yangqq.com/skin/jxhx/images/lm01.jpg" alt="" />
      </div>
      <div class="rigth">
        <h1>个人博客日记</h1>
        <p class="intro">
          个人博客日记，记录一些优秀个人站长是如何制作个人博客，建个人博客、以及经营个人网站的，本站还会推荐一些优秀的个人博客站长网站。
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  background: #fff;
  border-radius: 3px;
  padding: 20px;
  overflow: hidden;
  height: 140px;
  box-sizing: border-box;
  text-align: left;
  .content {
      padding-left: 150px;
      position: relative;
    .left {
      position: absolute;
      left: 0;
      top: 0;
      height: 100px;
      width: 132px;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
    h1{
      font-size: 24px;
      font-weight: bold;
    }
    .intro{
      margin-top: 10px;
      font-size: 14px;
      color: #666;
      height: 72px;
      line-height: 24px;
      -webkit-line-clamp:3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
  }
}
</style>

