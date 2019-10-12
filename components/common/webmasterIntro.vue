<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        站长推荐
      </div>
      <nuxt-link class="picWrapper" :to='"/article/"+specialIntroData.id'>
          <picture-with-title
          :bgUrl="specialIntroData.cover"
          :title="specialIntroData.title"
        ></picture-with-title>
      </nuxt-link>

      <div class="list">
        <ul>
          <li v-for="item in articleData" :key="item.id">
            <nuxt-link :to='"/article/"+item.id'>
                <div class="left">
                  <img :src="item.cover" alt="">
                </div>
                <div class="right">{{item.title}}</div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import pictureWithTitle from "./pictureWithTitle.vue";
export default {
  props :{
    webmasterIntroData : {
      type : Array,
      default : function(){
        return []
      }
    }
  },
  data(){
    return{
      articleData: this.webmasterIntroData.slice(1),
      specialIntroData : this.webmasterIntroData[0]
    }
  },
  created(){
    // this.getData();
  },
  methods:{
    getData(){
      this.$http({
        'url' : this.$http.adornUrl('/api/specialArticle'),
        'method' : 'GET',
        'params' : this.$http.adornParams()
      }).then(({data})=>{
        if(data.status == 'success'&& data.statusCode=='200'){
          this.articleData = data.data.slice(1);
          this.specialIntroData = data.data[0];
        }
      })
    }
  },
  components: {
    pictureWithTitle
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  padding: 20px 10px;
  background-color: #fff;
  text-align: left;
  .card {
    .subTitle {
      font-size: 16px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      color: #484848;
      font-weight: normal;
      position: relative;
      margin-bottom: 20px;
      &:hover:after {
        width: 80px;
      }
      &:after {
        content: "";
        position: absolute;
        width: 60px;
        height: 2px;
        content: "";
        background: #000;
        left: 0;
        bottom: 0;
        transition: all 0.5s ease;
      }
      span {
        display: inline-block;
        border-bottom: 2px solid #222;
      }
    }
    .picWrapper {
      display: block;
      width: 100%;
      height: 110px;
      .wrapper {
        padding: 0;
      }
      margin-bottom: 15px;
    }
    .list {
      font-size: 12px;
      li {
          overflow: hidden;
          margin-bottom: 10px;
          height: 60px;
          position: relative;
          padding-left: 80px;
          cursor: pointer;
          &:hover{
            .left{
              img{
              // width: 110%;
              height: 110%;
            }
            }
          }
          .left{
            width: 70px;
            height: 70px;
            position: absolute;
            left: 0;
            right: 0;
            overflow: hidden;
            img{
              // width: 100%;
              height: 100%;
              transition: all .5s ease;
              transition: all 0.5s;
            }
          }
          .right{
            padding-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            font-size: 14px;
            line-height: 18px;
            color: #222;
          }
      }
    }
  }
}
</style>
