<template>
  <div class="indexContent">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="18">
            <subTitle-card class="leftCard"></subTitle-card>
            <latest-article-list :latestArticleListData="latestArticleListData" class="leftCard"></latest-article-list>
        </el-col>
        <el-col :span="6">
            <click-sort :clickSortData = "clickSortData" class="rightCard"></click-sort>
            <webmaster-intro :webmasterIntroData="webmasterIntroData" class="rightCard"></webmaster-intro>
            <adCard class="rightCard navCard" imgScale="true" imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad.jpg"></adCard>
            <tag-cloud-card :tagCloudCardData="tagCloudCardData" class="rightCard"></tag-cloud-card>
            <guess-your-love :guessYourLoveData="guessYourLoveData" class="rightCard"></guess-your-love>
            <adCard class="rightCard navCard" imgScale="true" imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad02.jpg"></adCard>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import clickSort from "@/components/common/clickSort.vue";
import webmasterIntro from "@/components/common/webmasterIntro.vue";
import adCard from "@/components/common/adCard.vue";
import latestArticleList from "@/components/common/latestArticleList.vue";
import guessYourLove from "@/components/common/guessYourLove.vue";
import subTitleCard from "@/components/common/subTitleCard.vue";
import tagCloudCard from "@/components/common/tagCloudCard.vue";
import $http from "@/utils/http.js"
export default {
    data(){
        return {
            clickSortData : [],
            webmasterIntroData : [],
            tagCloudCardData : [],
            guessYourLoveData : [],
            latestArticleListData : []
        }
    },
    created () {
      this.init();
    },
    async asyncData({ params}) {
      let [request1Data, request2Data,request3Data,request4Data,request5Data] = await Promise.all([
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
        // 标签云
        $http({
          'url' : $http.adornUrl('/api/tags'),
          'method' : 'get',
          'params' : $http.adornParams()
        })
      ])
     
      return {
        clickSortData : request1Data.data.data || [],                         //点击排行
        webmasterIntroData : request2Data.data.data || [],              //站长推荐
        guessYourLoveData : request3Data.data.data || [],                //猜你喜欢
        latestArticleListData : request4Data.data.data || [],           //最新博文
        tagCloudCardData :   request5Data.data.data || []              //标签云
        
      }
    },
    methods: {
      init(){
        console.log(this.$route.query);
        if(!this.$route.query.type){
          this.$router.push('/404')
        }
      }
    },
    components:{
        clickSort,
        webmasterIntro,
        adCard,
        latestArticleList,
        guessYourLove,
        subTitleCard,
        tagCloudCard
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



