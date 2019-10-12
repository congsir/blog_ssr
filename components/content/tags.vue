<template>
  <div class="indexContent">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="18">
            <latest-article-list :tags="tags" class="leftCard"></latest-article-list>
        </el-col>
        <el-col :span="6">
            <click-sort class="rightCard"></click-sort>
            <webmaster-intro class="rightCard"></webmaster-intro>
            <adCard class="rightCard navCard" imgScale="true" imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad.jpg"></adCard>
            <tag-cloud-card class="rightCard"></tag-cloud-card>
            <guess-your-love class="rightCard"></guess-your-love>
            <adCard class="rightCard navCard" imgScale="true" imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad02.jpg"></adCard>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import clickSort from "../common/clickSort.vue";
import webmasterIntro from "../common/webmasterIntro.vue";
import adCard from "../common/adCard.vue";
import latestArticleList from "../common/latestArticleList.vue";
import guessYourLove from "../common/guessYourLove.vue";
import tagCloudCard from "../common/tagCloudCard.vue";
export default {
    data(){
        return {
            tags:""
        }
    },
    created () {
      this.init();
    },
    methods: {
      init(){
        if(!this.$route.query.tag){
          this.$router.push('/404')
        }else{
            this.tags = this.$route.query.tag
        }
      }
    },
    components:{
        clickSort,
        webmasterIntro,
        adCard,
        latestArticleList,
        guessYourLove,
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



