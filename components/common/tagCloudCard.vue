<template>
  <div class="wrapper">
    <div class="card">
      <div class="subTitle">
        标签云
      </div>
      <div class="list">
        <ul class="clearFix">
          <li v-for="item in tagsData" :key="item.id">
              <nuxt-link :to='"/tagsArticleList?tag="+item.tags'>
                {{item.tags}}
              </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
      tagCloudCardData : {
        type : Array,
        default : function(){
          return []
        }
      }
    },
    data(){
        return{
            colorList:['color1','color2','color3','color4','color5','color6','color7','color8'],
            tagsData : this.tagCloudCardData
        }
    },
    created() {
      // this.getData();
    },
    methods:{
      getData(){
        this.$http({
          'url' : this.$http.adornUrl('/api/tags'),
          'method' : 'get',
          'params' : this.$http.adornParams()
        }).then(({data})=>{
          if(data.statusCode == '200' && data.status == 'success'){
            this.tagsData = data.data.filter((ele)=>{
              return Number(ele.articleNum) > 0
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
      ul{
          padding-left: 12px;
      }
      li {
          float: left;
          &:nth-of-type(8n-7){
              a{
                background-color: #036564;
              }
          }
          &:nth-of-type(8n-6){
              a{
                background-color: #EB6841;
              }
          }
          &:nth-of-type(8n-5){
              a{
                background-color: #3FB8AF;
              }
          }
          &:nth-of-type(8n-4){
              a{
                background-color: #FE4365;
              }
          }
          &:nth-of-type(8n-3){
              a{
                background-color: #FC9D9A;
              }
          }
          &:nth-of-type(8n-2){
              a{
                background-color: #EDC951;
              }
          }
          &:nth-of-type(8n-1){
              a{
                background-color: #C8C8A9;
              }
          }
          &:nth-of-type(8n){
              a{
                background-color: #83AF9B;
              }
          }
          &:first-child{
              a{
                background-color: #036564;
              }
          }
          &:last-child{
              a{
                background-color: #3299BB;
              }
          }
         a{
            font-size: 14px;
            display: block;
            line-height: 24px;
            height: 24px;
            padding: 3px 10px;
            margin: 10px 5px 0 0;
            border-radius: 3px;
            transition: all 0.5s;
            color: #FFF;
         }
      }
    }
  }
}
</style>
