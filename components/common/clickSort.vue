<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        点击排行
      </div>
      <nuxt-link class="picWrapper" :to='"/article/"+topClickData.id'>
        <picture-with-title
          :bgUrl="topClickData.cover"
          :title="topClickData.title"
        ></picture-with-title>
      </nuxt-link>

      <div class="list">
        <ul>
          <li v-for="(item,index) in articleData" :key="item.id">
            <h3 :index="index+1">
              <nuxt-link :to='"/article/"+item.id'>{{item.title}}</nuxt-link>
            </h3>  
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import pictureWithTitle from "./pictureWithTitle.vue";
export default {
  props:{
    clickSortData : {
      type : Array,
      default : function(){
        return []
      }
    }
  },
  data(){
    return{
      articleData: this.clickSortData.slice(1),
      topClickData : this.clickSortData[0]
    }
  },
  created(){
    // this.getData();
  },
  methods:{
    getData(){
      this.$http({
        'url' : this.$http.adornUrl('/api/clickMostArticle'),
        'method' : 'GET',
        'params' : this.$http.adornParams()
      }).then(({data})=>{
        if(data.status == 'success'&& data.statusCode=='200'){
          this.articleData = data.data.slice(1);
          this.topClickData = data.data[0];
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
  a{
    text-decoration: none;
    color: #222;
  }
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
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        padding-left: 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        &:nth-of-type(2n){
            background-color: #eee;
        }
        &:nth-of-type(1){
            h3{
                &::before{
                    background-color: #FF6600;
                }
            }
        }
        &:nth-of-type(2){
            h3{
                &::before{
                    background-color: #FF6600;
                }
            }
        }
        &:nth-of-type(3){
            h3{
                &::before{
                    background-color: #FF6600;
                }
            }
        }
        h3 {
          text-align: left;
          font-size: 14px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break:break-all;
          &::before {
            display: inline-block;
            content: attr(index);
            color: #fff;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            background-color: #ccc;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
