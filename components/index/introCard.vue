<template>
  <div class="wrapper">
    <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item,index) in typesData" :key="item.id" :index="String(index+1)">{{item.type}}</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
    <div class="content">
      <div class="left">
        <div v-for="item in top2Data" :key="item.id">
          <nuxt-link :to='"/article/"+item.id'>
              <picture-with-title
                :bgUrl="item.cover"
                :title="item.title"
              ></picture-with-title>
          </nuxt-link>
        </div>
      </div>
      <div class="right">
        <div @mouseleave="toLiActive(1)" class="list">
          <ul>
            <li v-for="(item,index) in typesArticleData" :key="item.id" @mouseenter='toLiActive(index+1)' :class='{ active: liActive == index+1 }'>
              <nuxt-link :to='"/article/"+item.id'>
                <h3 :index="index+1">{{item.title}}</h3>
                <p class="intro">
                  {{item.abstract}}
                </p>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pictureWithTitle from "../common/pictureWithTitle.vue";
export default {
  props : {
      introCardData : {
        type : Object,
        default : function(){
          return {
            typesData : [],
            typesArticleData : [],
            top2Data : []
          }
        } 
      }
  },
  data() {
    return {
      activeIndex: '1',
      liActive: 1,
      typesData: this.introCardData.typesData,    //  类型列表
      typesArticleData: this.introCardData.typesArticleData,  //该类型下2个后的数据
      top2Data: this.introCardData.top2Data  //该类型下的前两个数据
    };
  },
  components: {
    pictureWithTitle
  },
  created () {
    // this.getTypeData();
    // console.log(this.introCardData)
  },
  methods: {
    handleSelect(key) {
      
      if(key == this.activeIndex){
        return;
      }else{
        let type = this.typesData[Number(key)-1].type;
        this.getTypeArticle(type);
        this.activeIndex = key;
      }
    },
    toLiActive(index) {
      this.liActive = index;
    },
    getTypeData(){
      this.$http({
        'url' : this.$http.adornUrl('/api/types'),
        'method' : 'get',
        'params' : this.$http.adornParams()
      }).then(({data})=>{
        if(data.statusCode == '200' && data.status == "success"){
          this.typesData = data.data;
          this.getTypeArticle(data.data[0].type);
        }
      })
    },
    getTypeArticle(type){
      if(type){
        this.$http({
          'url' : this.$http.adornUrl('/api/typeArticle'),
          'method' : 'get',
          'params' : this.$http.adornParams({
            type : type
          })
        }).then(({data})=>{
          if(data.statusCode == '200' && data.status == "success"){
            this.typesArticleData = data.data.slice(2);
            this.top2Data = data.data.slice(0,2);
          }
        })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #000;
  color: #303133;
}
.wrapper {
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  background-color: #fff;
  .content {
    height: 220px;
    position: relative;
    .left {
      position: absolute;
      height: 100%;
      width: 275px;
      a {
        height: 100px;
        display: block;
        &:nth-of-type(1) {
          margin: 10px 0;
        }
        .wrapper {
          padding: 0;
        }
      }
    }
    .right {
      padding-left: 295px;
      padding-top: 10px;
      .list {
        height: 210px;
        // border: 1px solid #ccc;
        li {
          margin-bottom: 10px;
          padding: 0 10px;
          a{
            color: #333;
            cursor: pointer;
          }
          p {
            line-height: 24px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            height: 48px;
            display: none;
          }
          h3 {
            text-align: left;
            font-size: 14px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-all;
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
          &.active {
            background-color: #eee;
            padding: 8px 10px 12px 10px;
            h3 {
              color: #000;
              font-weight: bold;
              &::before {
                background-color: #000;
              }
            }
            p {
              display: -webkit-box;
            }
          }
        }
      }
    }
  }
}
</style>

