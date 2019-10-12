<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        特别推荐
        <!-- <div class="navgate">
          <li v-for="item in typesData" :key="item.id">{{item.type}}</li>
        </div> -->
      </div>
      <div class="list">
          <ul>
               <li v-for="item in articleData" :key="item.id">
                    <i class="ztpic">
                      <nuxt-link :to='"/article/"+item.id'>
                        <img :src="item.cover"/>
                      </nuxt-link>
                    </i>
                    <b>{{item.title}}</b>
                    <span>
                        {{item.abstract}}
                    </span>
                    <nuxt-link :to='"/article/"+item.id' class="readmore">文章阅读</nuxt-link>
                </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props : {
    articleData : {
      type : Array,
      default : function(){
        return []
      }
    }
  },
  data() {
    return {
      // articleData:[] , //文章数据
      // typesData:[]     //文章类型
    };
  },
  components: {},
  created() {
    // this.getData();
    // this.getTypeData();
  },
  methods:{
    getData(){
      this.$http({
        'url' : this.$http.adornUrl('/api/specialArticle'),
        'method' : 'GET',
        'params' : this.$http.adornParams()
      }).then(({data})=>{
        if(data.status == 'success'&& data.statusCode=='200'){
          this.articleData = data.data.slice(0,6);
        }
      })
    },
    getTypeData(){
      this.$http({
        'url' : this.$http.adornUrl('/api/types'),
        'method' : 'get',
        'params' : this.$http.adornParams()
      }).then(({data})=>{
        if(data.statusCode == '200' && data.status == "success"){
          this.typesData = data.data;
        }
      })
    },
  },
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
      .navgate {
        position: absolute;
        right: 20px;
        top: 0;
        li {
          display: inline-block;
          cursor: pointer;
          &::after {
            display: inline-block;
            content: "/";
            margin: 0 10px;
          }
          &:nth-last-of-type(1)::after {
            display: none;
          }
        }
      }
    }
    .list {
      font-size: 12px;
      ul{
          position: relative;
          overflow: hidden;
          padding: 10px 0 20px 10px;
          &::before{
                content: "";
                position: absolute;
                background: #fff;
                width: 1px;
                height: 100%;
                left: 10px;
          }
          &::after{
                content: "";
                position: absolute;
                background: #fff;
                width: 100%;
                height: 1px;
                bottom: 20px;
                left: 0;
          }
          li{
                float: left;
                width: 27.6%;
                border-bottom: #eee 1px solid;
                border-left: #eee 1px solid;
                overflow: hidden;
                padding: 20px;
                -moz-transition: all .5s ease;
                -webkit-transition: all .5s ease;
                transition: all .5s ease;
                &:hover{
                    box-shadow: 0 0 8px 2px rgba(0,0,0,.2);
                    .ztpic{
                        img{
                            width: 105%;
                        }
                    }
                }
                .ztpic {
                    width: 100%;
                    height: 100px;
                    overflow: hidden;
                    border-radius: 3px;
                    background: #CCC;
                    display: block;
                    img {
                        display: inline-block;
                        width: 100%;
                        min-height: 100%;
                        height: auto;
                        vertical-align: middle;
                        transition: all .5s ease-out .1s;
                    }
                }
                b {
                    display: block;
                    width: 100%;
                    overflow: hidden;
                    height: 30px;
                    line-height: 30px;
                    margin: 10px 0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    font-weight: bold;
                }
                span {
                    display: block;
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    font-size: 14px;
                    line-height: 21px;
                    height: 62px;
                }
                .readmore {
                    margin: 10px 0 0 0;
                    color: #096;
                    display: block;
                    &:before {
                        content: "+";
                        color: #063;
                    }
                }
          }
      }
    }
  }
}
</style>
