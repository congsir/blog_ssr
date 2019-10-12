<template>
    <div class="footer">
        <div class="wrapper">
            <div class="content">
                <div class="wx">
                    <div class="gzh">
                        <img src="../../static/img/wxgzh.jpg" alt="">
                    </div>
                    <div class="mywx">
                        <img src="../../static/img/wx.png" alt="">
                    </div>
                </div>
                <div class="state">
                    <h5>站点声明：</h5>
                    <ul>
                        <li>1.本站为个人博客，原创内容允许转载，但是转载请署名，且未经允许不得用于任何商业目的。</li>
                        <li>2.博客有转载非原创内容，已署名作者，侵权请联系本人删除。</li>
                        <!-- <li>2.所有文章均未经授权禁止转载、摘编、复制或者建立镜像，如有违反，追究法律责任。举报邮箱：xxxx@qq.com</li> -->
                        <!-- <li>Copyright © www.yangqq.com All Rights Reserved. 备案号：蜀ICP备11002373号-1</li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .footer{
        background-color: #373D41;
    }
    .wrapper{
        box-sizing: border-box;
        height: 190px;
        border-top: 10px solid #00C1DE;
    }
    .content{
        width: 1200px;
        margin: auto;
        box-sizing: border-box;
        position: relative;
        padding-left: 260px;
        padding-top: 30px;
        color: #73777a;
        font-size: 12px;
        .wx{
            position: absolute;
            left: 0;
            text-align: center;
            img{
                width: 100px;
                height: 100px;
            }
            .gzh{
                display: inline-block;
                margin-right: 25px;
            }
            .mywx{
                display: inline-block;
            }
            .gzh::after{
                content: '微信公众号';
                display: block;
                margin-top: 8px;
            }
            .mywx::after{
                content: '我的微信';
                display: block;
                margin-top: 8px;
            }

        }
        .state{
            text-align: left;
            font-size: 14px;
            h5{
                font-size: 16px;
                color: #00C1DE;
            }
            li{
                margin-top: 15px;
            }
        }
    }

</style>

