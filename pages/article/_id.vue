<template>
  <div class="article">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="18">
            <div class="articleContent">
                <articleContent :articleContentData="articleContentData"></articleContent>
            </div>
        </el-col>
        <el-col :span="6">
          <click-sort :clickSortData = "clickSortData" class="rightCard"></click-sort>
          <webmaster-intro :webmasterIntroData="webmasterIntroData" class="rightCard"></webmaster-intro>
          <adCard
            class="rightCard navCard"
            imgScale="true"
            imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad.jpg"
          ></adCard>
          <tag-cloud-card :tagCloudCardData="tagCloudCardData" class="rightCard"></tag-cloud-card>
          <guess-your-love :guessYourLoveData="guessYourLoveData" class="rightCard"></guess-your-love>
          <adCard
            class="rightCard navCard"
            imgScale="true"
            imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad02.jpg"
          ></adCard>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import clickSort from "@/components/common/clickSort.vue";
import webmasterIntro from "@/components/common/webmasterIntro.vue";
import adCard from "@/components/common/adCard.vue";
import guessYourLove from "@/components/common/guessYourLove.vue";
import tagCloudCard from "@/components/common/tagCloudCard.vue";
import articleContent from "@/components/common/articleContent.vue"
import $http from "@/utils/http.js"
export default {
  data() {
    return {
        clickSortData : [],       //点击排行     
        webmasterIntroData : [],    //站长推荐
        guessYourLoveData : [],     //猜你喜欢
        specialRecommondData : [] , //特别推荐
        articleContentData : {} ,     //文章详情
        tagCloudCardData : []  ,       //标签云
        time : 11111111111             //文章发布时间
    };
  },
  components: {
    clickSort,
    webmasterIntro,
    adCard,
    guessYourLove,
    tagCloudCard,
    articleContent
  },
  async fetch ({ store, params }) {
    await store.dispatch('de_toTop');
  },
  async asyncData({ params}) {
      let introCardData = {
              typesData : [],
              typesArticleData : [],
              top2Data : []
        }
      let [request1Data, request2Data,request3Data,request4Data,request5Data,request6Data] = await Promise.all([
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
        // 文章详情
        $http({
            url: $http.adornUrl('/api/detailArticle'),
            method: 'get',
            params: $http.adornParams({
                id : params.id
            })
        }),
        // 标签云
        $http({
          'url' : $http.adornUrl('/api/tags'),
          'method' : 'get',
          'params' : $http.adornParams()
        })
      ])
        
      return {
        
        specialRecommondData : request1Data.data.data.slice(0,6) || [], //特别推荐
        clickSortData : request2Data.data.data || [],                         //点击排行
        webmasterIntroData : request3Data.data.data || [],              //站长推荐
        guessYourLoveData : request4Data.data.data || [],                //猜你喜欢
        articleContentData : request5Data.data.data || {},            //文章详情
        time : " ",
        tagCloudCardData :   request6Data.data.data || []              //标签云
      }
    },
};
</script>
<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: auto;
}
.rightCard{
  margin-bottom: 20px;
}
</style>