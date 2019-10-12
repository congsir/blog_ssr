<template>
    <div class="articleContent">
        <div class="title">
            <h1>{{articleData.title}}</h1>
            <div class="info">
                <span>{{time}}</span>
                <span>字数 {{articleData.words_num}}</span>
                <span>阅读 {{articleData.read_num}}</span>
            </div>
        </div>
        <!-- 简介 -->
        <div class="intro">
            <p>
                <span>简介</span>  {{articleData.abstract}}
            </p>
        </div>
        <div class="content" v-html="articleData.article">
        </div>
        <div class="contentFooter">
            <div class="tags">
                tags: {{articleData.tags}}
            </div>
            <div class="zan">
                <el-button type="danger" :disabled="zanButton" @click.native="zanClick()" >赞一下({{articleData.zan_num}})</el-button>
            </div>
            <div class="goOther">
                <li v-if="preArticle.length>0"> <nuxt-link :to='"/article/"+preArticle[0].id'>上一篇:{{preArticle[0].title}}</nuxt-link> <span></span></li>
                <li v-if="nextArticle.length>0"> <nuxt-link :to='"/article/"+nextArticle[0].id'>下一篇:{{nextArticle[0].title}}</nuxt-link> <span></span></li>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        articleContentData : {
            type : Array,
            default : function () {
                return [{
                    abstract: "",     //文章简介
                    article: "",      //文章详情
                    cover: "",       //文章详情
                    create_time: "",  //文章创建时间
                    guess_like: 0,                 //猜你喜欢
                    id: 2,                          //文章id
                    is_banner: 1,                   //  是否为首页banner
                    is_special: 0,                  //  特别推荐
                    is_top: 0,                      //  是否为首页置顶文章
                    read_num: 9,                    //  文章点击量
                    tags: "",                       //  文章标签
                    title: "",                      //  文章标题
                    type: "",                       //  文章类型
                    update_time: "",   //  文章修改时间
                    words_num: 565,                 //  文章字数
                    zan_num: 0,                     //  点赞数
                }]
            
            }
        }
        
    },
    data(){
        return {
            articleData: this.articleContentData[0],
            // this.articleContentData.map((ele)=>{
            //     if(!Number(ele.update_time)){
            //         ele.update_time = ele.update_time
            //     }else{
            //         ele.update_time = this.$fn.getLocalTime(ele.update_time)
            //     }
            //     return ele;
            //     })[0],
            preArticle: [],
            nextArticle: [],
            zanButton: false,
            time : this.$fn.getLocalTime(this.articleContentData[0].update_time)
        }
    },
    created(){
        // this.getData();
        this.clickArticle();
        this.scrollToTop();
        this.getPreAndNext(this.articleData.update_time);
    },
    watch: {
      "$route"(to){
          console.log(to)
          if(to.path.includes('/article')){
              this.init();
              
          }
          
      }  
    },
    methods:{
        init(){
            this.getData();
            this.clickArticle();
            this.zanButton = false;
        },
        getData(){
            this.$http({
            url: this.$http.adornUrl('/api/detailArticle'),
            method: 'get',
            params: this.$http.adornParams({
                id : this.$route.params.id
            })
            }).then(({data}) => {
            if (data.status =="success" && data.statusCode == 200) {
                this.getPreAndNext(data.data[0].update_time);
                this.articleData = data.data.map((ele)=>{
                ele.update_time = this.$fn.getLocalTime(ele.update_time)
                return ele;
                })[0];
                this.scrollToTop();
            }
            })
        },
        // 文章点击量统计
        clickArticle(){
            this.$http({
            url: this.$http.adornUrl('/api/clickArticle'),
            method: 'post',
            data:this.$http.adornData({
                'id' : this.$route.params.id
              })
            }).then(({data}) => {
                return data;
            })
        },
        // 文章点赞
        zanClick(){
            this.$http({
            url: this.$http.adornUrl('/api/zan'),
            method: 'post',
            data:this.$http.adornData({
                'id' : this.$route.params.id
              })
            }).then(({data}) => {
                if (data.status =="success" && data.statusCode == 200) {
                    if(data.msg == "success"){
                        console.log(this.articleData.zan_num)
                        this.articleData.zan_num++;
                        this.zanButton = true;
                        this.$message({
                            message : '谢谢您的支持',
                            type : 'success',
                            offset :  '60'
                        })
                    }
                }
            })
        },
        // 当前文章的前一篇与后一篇
        getPreAndNext(time){
            // time = Number(time)
            this.$http({
            url: this.$http.adornUrl('/api/preAndNext'),
            method: 'get',
            params: this.$http.adornParams({
                updateTime : time
            })
            }).then(({data}) => {
            if (data.status =="success" && data.statusCode == 200) {
                this.preArticle =  data.data.preArticle;
                this.nextArticle = data.data.nextArticle;   
            }
            })
        },
        scrollToTop() {
            this.$store.dispatch('toTop')
        }
    }
}
</script>
<style lang="scss">
    .articleContent{
        background-color: #fff;
        border-radius: 10px;
        min-height: 90vh;
        padding: 16px;
        box-sizing: border-box;
        h1{
            font-size: 24px;
            font-weight: bold;
            color: #404040;
        }
        .title{
            margin-top: 20px;
            &::after{
                content: '';
                display: block;
                height: 1px;
                width: 100%;
                background-color: #ccc;
                margin: 20px 0;
            }
            h1{
                padding-left: 30px;
                position: relative;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &::before{
                    content:'';
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background-color: #333;
                }
            }
            .info{
                margin-top: 16px;
                font-size: 12px;
                color: #969696;
                padding-left: 30px;
                span{
                    margin-right: 16px;
                }
            }
        }
        .intro{
            background-color: #F6F6F6;
            color: #888888;
            border: 1px solid #F3F3F3;
            padding: 10px;
            margin: 10px auto 0;
            line-height: 23px;
            font-size: 14px;
            span:nth-of-type(1){
                color: #333;
                font-weight: bold;
            }
        }
        .content{
            font-size: 16px;
            font-weight: 400;
            color: #4c4c4c;
            line-height: 22px;
            p{
                margin: 10px 0;
            }
            img{
                max-width: 100%;
            }
        }
        .contentFooter{
            margin-top: 30px;
            .tags{
                color: #404040;
            }
            .zan{
                text-align: center;
                margin-top: 16px;
            }
            .goOther{
                margin-top: 20px;
                li{
                    color: #404040;
                    margin-bottom: 20px;
                    list-style: none;
                    span{
                        cursor: pointer;
                    }
                    a{
                        color: #333;
                        &:hover{
                            color: skyblue;
                        }
                    }
                }
            }
        }
    }
</style>