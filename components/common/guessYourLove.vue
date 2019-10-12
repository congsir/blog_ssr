<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        猜你喜欢
      </div>
      <div class="list">
        <ul>
          <li v-for="item in articleData" :key="item.id">
            <nuxt-link :to='"/article/"+item.id'>{{item.title}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    guessYourLoveData:{
      type : Array,
      default : function(){
        return []
      }
    }
  },
   data(){
    return{
      articleData:this.guessYourLoveData
    }
  },
  created(){
    // this.getData();
  },
  methods:{
    getData(){
      this.$http({
        'url' : this.$http.adornUrl('/api/guessLikeArticle'),
        'method' : 'GET',
        'params' : this.$http.adornParams()
      }).then(({data})=>{
        if(data.status == 'success'&& data.statusCode=='200'){
          this.articleData = data.data;
        }
      })
    }
  },
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
            font-size: 12px;
            line-height: 24px;
            margin-bottom: 12px;
            display: block;
            border-radius: 4px;
            padding: 4px 12px 4px 30px;
            position: relative;
            transition: all .2s ease;
            &:before {
                position: absolute;
                content: "";
                width: 3px;
                height: 3px;
                background: #000;
                border-radius: 10px;
                left: 15px;
                top: 15px;
            }
            a{
                color: #222;
            }
      }
    }
  }
}
</style>
