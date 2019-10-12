<template>
  <div class="article">
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="18">
            <div class="articleContent">
                <articleContent></articleContent>
            </div>
        </el-col>
        <el-col :span="6">
          <click-sort class="rightCard"></click-sort>
          <webmaster-intro class="rightCard"></webmaster-intro>
          <adCard
            class="rightCard navCard"
            imgScale="true"
            imgUrl="http://jxhx2.yangqq.com/skin/jxhx/images/ad.jpg"
          ></adCard>
          <tag-cloud-card class="rightCard"></tag-cloud-card>
          <guess-your-love class="rightCard"></guess-your-love>
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
import clickSort from "../common/clickSort.vue";
import webmasterIntro from "../common/webmasterIntro.vue";
import adCard from "../common/adCard.vue";
import guessYourLove from "../common/guessYourLove.vue";
import tagCloudCard from "../common/tagCloudCard.vue";
import articleContent from "../common/articleContent.vue"
export default {
  data() {
    return {
    };
  },
  components: {
    clickSort,
    webmasterIntro,
    adCard,
    guessYourLove,
    tagCloudCard,
    articleContent
  }
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