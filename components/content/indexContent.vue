<template>
  <div class="indexContent">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="12">
            <el-carousel trigger="click" height="260px">
            <el-carousel-item v-for="item in bannerData" :key="item.id">
                <nuxt-link :to='"/article/"+item.id'>
                  <img :src="item.cover" :alt="item.title">
                </nuxt-link>
            </el-carousel-item>
            </el-carousel>
        </el-col>
        <el-col :span="6">
            <div v-for="item in topArticleData" :key="item.id" >
              <nuxt-link :to='"/article/"+item.id'>
                <picture-with-title :bgUrl="item.cover" :title="item.title"></picture-with-title>
              </nuxt-link>
            </div>
        </el-col>
        <el-col :span="6">
            <card></card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="18">
            <introCard class="leftCard"></introCard>
            <special-recommond class="leftCard"></special-recommond>
            <adCard imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/longad.jpg" class="leftCard"></adCard>
            <latest-article-list class="leftCard"></latest-article-list>
        </el-col>
        <el-col :span="6">
            <latest-update class="rightCard"></latest-update>
            <click-sort class="rightCard"></click-sort>
            <webmaster-intro class="rightCard"></webmaster-intro>
            <adCard class="rightCard navCard" imgScale="true" imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad.jpg"></adCard>
            <guess-your-love class="rightCard"></guess-your-love>
            <adCard class="rightCard navCard" imgScale="true" imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad02.jpg"></adCard>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Card from "../index/personalCard.vue";
import pictureWithTitle from "../common/pictureWithTitle.vue";
import latestUpdate from "../common/latestUpdate.vue";
import introCard from "../index/introCard.vue";
import clickSort from "../common/clickSort.vue";
import webmasterIntro from "../common/webmasterIntro.vue";
import specialRecommond from "../index/specialRecommond.vue";
import adCard from "../common/adCard.vue";
import latestArticleList from "../common/latestArticleList.vue";
import guessYourLove from "../common/guessYourLove.vue";
export default {
    data(){
        return {
            bannerData:[],
            topArticleData: []
        }
    },
    components:{
        Card,
        pictureWithTitle,
        latestUpdate,
        introCard,
        clickSort,
        webmasterIntro,
        specialRecommond,
        adCard,
        latestArticleList,
        guessYourLove
    },
    created(){
      this.getBannerArticle();
      this.getTopArticle();
    },
    methods:{
      getBannerArticle(){
        this.$http({
          url : this.$http.adornUrl('/api/bannerArticle'),
          method: "GET",
          params: this.$http.adornParams({

          })
        }).then(({data})=>{
          if(data.status == 'success'&&data.statusCode=='200'){
            this.bannerData = data.data;
          }
        })
      },
      getTopArticle(){
        this.$http({
          url : this.$http.adornUrl('/api/topArticle'),
          method: "GET",
          params: this.$http.adornParams({

          })
        }).then(({data})=>{
          if(data.status == 'success'&&data.statusCode=='200'){
            this.topArticleData = data.data;
          }
        })
      }
    }
}
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: auto;
  a{
      display: block;
      height: 125px;
      text-decoration: none;
      margin-bottom: 10px;
  }
  .rightCard{
      margin-bottom: 20px;
  }
  .navCard.rightCard{
    height: 213px;
  }
  .leftCard{
    margin-bottom: 20px;
  }
}
.el-col {
  border-radius: 4px;
}
.el-carousel{
  overflow: hidden;
  a{
    display: block;
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item img{
    width: 100%;
    height: 100%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>


