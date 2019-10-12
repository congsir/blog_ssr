<template>
  <div class="indexContent">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="12">
            <el-carousel trigger="click" height="260px">
            <el-carousel-item v-for="item in bannerData" :key="item.id">
                <router-link :to='"/article/"+item.id'>
                  <img :src="item.cover" :alt="item.title">
                </router-link>
            </el-carousel-item>
            </el-carousel>
        </el-col>
        <el-col :span="6">
            <div v-for="item in topArticleData" :key="item.id" >
              <router-link :to='"/article/"+item.id'>
                <picture-with-title :bgUrl="item.cover" :title="item.title"></picture-with-title>
              </router-link>
            </div>
        </el-col>
        <el-col :span="6">
            <card></card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="18">
            <introCard :introCardData="introCardData" class="leftCard"></introCard>
            <special-recommond :articleData="specialRecommondData" class="leftCard"></special-recommond>
            <adCard imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/longad.jpg" class="leftCard"></adCard>
            <latest-article-list :latestArticleListData="latestArticleListData" class="leftCard"></latest-article-list>
        </el-col>
        <el-col :span="6">
            <latest-update :articleData="latestUpdateData" class="rightCard"></latest-update>
            <click-sort :clickSortData = "clickSortData" class="rightCard"></click-sort>
            <webmaster-intro :webmasterIntroData="webmasterIntroData" class="rightCard"></webmaster-intro>
            <adCard class="rightCard navCard" imgScale="true" imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad.jpg"></adCard>
            <guess-your-love :guessYourLoveData="guessYourLoveData" class="rightCard"></guess-your-love>
            <adCard class="rightCard navCard" imgScale="true" imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad02.jpg"></adCard>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Card from "@/components/index/personalCard.vue";
import pictureWithTitle from "@/components/common/pictureWithTitle.vue";
import latestUpdate from "@/components/common/latestUpdate.vue";
import introCard from "@/components/index/introCard.vue";
import clickSort from "@/components/common/clickSort.vue";
import webmasterIntro from "@/components/common/webmasterIntro.vue";
import specialRecommond from "@/components/index/specialRecommond.vue";
import adCard from "@/components/common/adCard.vue";
import latestArticleList from "@/components/common/latestArticleList.vue";
import guessYourLove from "@/components/common/guessYourLove.vue";
import $http from "@/utils/http.js"
export default {
    data(){
        return {
            bannerData:[],
            topArticleData: [],     
            latestUpdateData : [],  //最近更新
            introCardData : {       //分类介绍
              typesData : [],
              typesArticleData : [],
              top2Data : []
            },
            clickSortData : [],       //点击排行
            specialRecommondData : [] , //特别推荐
            webmasterIntroData : [],    //站长推荐
            guessYourLoveData : [],          //猜你喜欢
            latestArticleListData : []          //最新博文
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
    async asyncData({ params}) {
      let introCardData = {
              typesData : [],
              typesArticleData : [],
              top2Data : []
        }
      let [request1Data, request2Data,request3Data,request4Data,request5Data,request6Data,request7Data,request8Data] = await Promise.all([
        // 顶部banner
        $http({
          url : $http.adornUrl('/api/bannerArticle'),
          method: "GET",
          params: $http.adornParams({})
        }),
        // 顶部推荐
        $http({
          url : $http.adornUrl('/api/topArticle'),
          method: "GET",
          params: $http.adornParams({})
        }),
        // 最近更新
        $http({
          'url' : $http.adornUrl('/api/latestArticle'),
          'method' : 'GET',
          'params' : $http.adornParams()
        }),
        // 特别推荐
        $http({
          'url' : $http.adornUrl('/api/specialArticle'),
          'method' : 'GET',
          'params' : $http.adornParams()
        }),
        // 点击排行
        $http({
          'url' : $http.adornUrl('/api/clickMostArticle'),
          'method' : 'GET',
          'params' : $http.adornParams()
        }),
        // 站长推荐
        $http({
          'url' : $http.adornUrl('/api/specialArticle'),
          'method' : 'GET',
          'params' : $http.adornParams()
        }),
        // 猜你喜欢
        $http({
          'url' : $http.adornUrl('/api/guessLikeArticle'),
          'method' : 'GET',
          'params' : $http.adornParams()
        }),
        // 最新博文
        $http({
          'url' : $http.adornUrl('/api/latestArticle'),
          'method' : 'GET',
          'params' : $http.adornParams()
        }),
        // 简介推荐文章
         $http({
          'url' : $http.adornUrl('/api/types'),
          'method' : 'get',
          'params' : $http.adornParams()
        }).then(({data})=>{
          if(data.statusCode == '200' && data.status == "success"){
            introCardData.typesData = data.data;
          }
        })
      ])
      // 获取简介推荐第一个模块后获取详情
      let typeArticleData = await $http({
              'url' : $http.adornUrl('/api/typeArticle'),
              'method' : 'get',
              'params' : $http.adornParams({
                type : introCardData.typesData[0].type
              })
          })
      introCardData.typesArticleData = typeArticleData.data.data.slice(2);
      introCardData.top2Data = typeArticleData.data.data.slice(0,2);
      return {
        bannerData: request1Data.data.data || [],
        topArticleData: request2Data.data.data || [],
        latestUpdateData : request3Data.data.data.slice(0,4) || [],   //最近更新
        specialRecommondData : request4Data.data.data.slice(0,6) || [], //特别推荐
        clickSortData : request5Data.data.data || [],                         //点击排行
        webmasterIntroData : request6Data.data.data || [],              //站长推荐
        guessYourLoveData : request7Data.data.data || [],                //猜你喜欢
        latestArticleListData : request8Data.data.data || [],           //最新博文
        introCardData : introCardData,
        
      }
    },
    methods:{
      
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


