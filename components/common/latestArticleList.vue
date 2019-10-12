<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        最新博文
      </div>
      <div class="list">
        <ul>
            <li v-for="item in articleData" :key="item.id">
              <h3 class="hot">{{item.title}}</h3>
              <div class="contentWrapper">
                  <div class="left">
                    <div class="tag">{{item.tags}}</div>
                    <img :src="item.cover" alt="">
                  </div>
                  <div class="right">
                      <p>
                        {{item.abstract}}
                      </p>
                      <div class="userInfo">
                        <span class="publishTime">{{item.update_time}}</span>
                        <span>[ 
                          <nuxt-link :to='"tagsArticleList?tag="+item.tags'>{{item.tags}}</nuxt-link>
                           ]</span>
                      </div>
                      <div class="readMore">
                        <div class="btn">
                          <nuxt-link :to='"/article/"+item.id'>阅读更多</nuxt-link>
                        </div>
                      </div>
                  </div>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    "tags":{
      type: String
    },
    latestArticleListData : {
      type: Array,
      default : function () {
        return []
      }
    }
  } ,
  data(){
    return{
      articleData: []
    }
  },
  created(){
    // this.getData(this.tags);
    this.articleData = this.latestArticleListData.map((ele)=>{
        if(!Number(ele.update_time)){
          ele.update_time = ele.update_time
        }else{
          ele.update_time = this.$fn.getLocalTime(ele.update_time)
        }
        return ele;
      })
  },
  watch: {
    '$route'(to,from){
      console.log(to);
      console.log(from)
      if(from.path == '/tagsArticleList' && to.path == '/tagsArticleList'){
        this.getData(this.$route.query.tag);
      }
    }
  },
  methods:{
    getData(tags){
      this.$http({
        'url' : this.$http.adornUrl('/api/latestArticle'),
        'method' : 'GET',
        'params' : this.$http.adornParams({
          tags: tags
        })
      }).then(({data})=>{
        if(data.status == 'success'&& data.statusCode=='200'){
          this.articleData = data.data.map((ele)=>{
              ele.update_time = this.$fn.getLocalTime(ele.update_time)
              return ele;
            });
        }
      })
    }
  }
}
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
    .list {
      font-size: 12px;
      li {
            overflow: hidden;
            margin-bottom: 20px;
            border-bottom: #eee 1px dashed;
            padding: 0 10px 20px 10px;
            position: relative;
            min-height: 120px; 
          h3{
            font-size: 16px;
            color: #333;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          h3.hot::before{
              content: '[顶]';
              display: inline;
              color: #f00;
              margin-right: 1em;
          }
          .contentWrapper{
            position: relative;
            padding-left: 220px;
            margin-top: 10px;
            overflow: hidden;
            .left{
              position: absolute;
              width: 200px;
              left: 0;
              overflow: hidden;
              border-radius: 3px;
              img{
                width: 100%;
                animation: all 0.5s ease;
                &:hover{
                  width: 110%;
                }
              }
              .tag{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 9;
                font-style: normal;
                padding: 3px 5px;
                background: rgba(18,182,221,.8);
                font-size: 14px;
                color: #fff;
              }
            }
            .right{
              height: 125px;
              position: relative;
              p{
                height: 63px;
                line-height: 21px;
                font-size: 14px;
                color: #666;
                -webkit-line-clamp: 3;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
              }
              .userInfo{
                position: absolute;
                bottom: 0;
                left: 0;
                height: 40px;
                span{
                  display: inline-block;
                  height: 40px;
                  line-height: 40px;
                  vertical-align: top;
                  font-size: 16px;
                  margin-right: 20px;
                  color: #999;
                  a{
                    color: #096;
                  }
                }
              }
              .readMore{
                font-size: 16px;
                right: 10px;
                bottom: 0px;
                position: absolute;
                padding: 6px 10px;
                background: #12b7de;
                color: #fff;
                border-radius: 3px;
                cursor: pointer;
                a{
                  color: #fff;
                }
              }
            }
          }
      }
    }
  }
}
</style>
