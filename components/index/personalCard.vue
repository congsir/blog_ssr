<template>
  <div class="wrapper">
    <div class="card">
      <div class="title" title="个人介绍"><a href="/aboutMe">我的名片</a></div>
      <ul class="msg">
        <li>网名：insper</li>
        <li>职业：前端开发工程师</li>
        <li>现居：湖北省-武汉市</li>
        <li>Email: 894719813@qq.com</li>
      </ul>
      <ul class="linkmore">
        <li>
          <a
            href="/aboutMe"
            class=""
            title="个人介绍"
          ><i class="el-icon-s-home"></i></a>
        </li>
        <li>
          <a
            href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=894719813@qq.com"
            target="_blank"
            class=""
            title="我的邮箱"
          ><i class="el-icon-chat-dot-square"></i></a>
        </li>
        <li>
          <a
            href="http://wpa.qq.com/msgrd?v=3&amp;uin=894719813&amp;site=qq&amp;menu=yes"
            target="_blank"
            class=""
            title="QQ联系我"
          ><img src="../../static/img/1164430.png" alt=""></a>
        </li>
        <li id="weixin">
          <a
            href="#"
            target="_blank"
            class="vx"
            title="关注我的微信"
          ><img src="../../static/img/1127547.png" alt=""></a
          >
          <!-- <i><img src="../../static/img/wx.png"/></i> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1),
    inset 0px 1px 1px rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  background: url("../../static/img/quote-bg.png") no-repeat top right
    rgba(42, 42, 42, 1);
  height: 260px;
  overflow: hidden;
  margin-bottom: 20px;
  text-align: left;
  color: #d0d2d4;
  .title {
    font-size: 22px;
    margin: 10px;
    color: #89919a;
    font-weight: normal;
    padding-bottom: 10px;
    a{
      color: #89919a;
      font-weight: normal;
    }
  }
  .msg > li {
    font-size: 12px;
    padding: 0 0 0 20px;
    line-height: 28px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    color: #d0d2d4;
    animation: animations2 5s ease-in-out 5s;
  }
  .linkmore {
    margin: 15px;
  }
  .linkmore li {
    width: 25%;
    float: left;
  }
  .linkmore li a {
    height: 53px;
    display: block;
    // overflow: hidden;
    box-shadow: 0px 1px 0px rgba(255,255,255,.1), inset 0px 1px 1px rgba(0,0,0,.7);
    border-radius: 50%;
    margin: 0 5px;
    position: relative;
    img{
        position: absolute;
        width: 70%;
        height: 70%;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    &.vx:hover::after{
        width: 100px;
        height: 100px;
        content: '';
        display: block;
        position: absolute;
        bottom: 60px;
        left: -50px;
        background-image: url('../../static/img/wx.png');
        background-size: 100% 100%;
    }
  }
  a{
    
    font-size: 36px;
    position: relative;
  }
  a i{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
  }
  i.el-icon-s-home{
      color: #ef5509;
  }
  i.el-icon-chat-dot-square{
      color: #FF991A;
  }
  
}
</style>

