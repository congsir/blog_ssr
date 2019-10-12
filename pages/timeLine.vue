<template>
    <div class="indexContent">
        <div class="block">
            <div class="radio">
                排序：
                <el-radio-group v-model="reverse">
                <el-radio :label="true">倒序</el-radio>
                <el-radio :label="false">正序</el-radio>
                </el-radio-group>
            </div>

            <el-timeline :reverse="reverse">
                <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.update_time" class="line-item" >
                <nuxt-link :to="'/article/'+ activity.id ">{{activity.title}}</nuxt-link>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>
<script>
    import $http from "@/utils/http.js"
  export default {
    data() {
      return {
        reverse: true,
        activities: [
        ]
      };
    },
    created() {
        this.activities = this.activities.map((ele)=>{
              if(!Number(ele.update_time)){
                  ele.update_time = ele.update_time
              }else{
                  ele.update_time = this.$fn.getLocalTime(ele.update_time)
              }
              return ele;
            })
    },
    async asyncData({ params}) {
    let {data}  =   await  $http({
                        url: $http.adornUrl('/api/timeLine'),
                        method: 'get',
                        params: $http.adornParams()
                    })
        return {
            activities : data.data
        }
    },
    methods:{
      getData(){
        this.$http({
          url: this.$http.adornUrl('/api/timeLine'),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          if (data.status =="success" && data.statusCode == 200) {
            this.activities = data.data.map((ele)=>{
              ele.update_time = this.$fn.getLocalTime(ele.update_time)
              return ele;
            })
          }
        })
      }
      
    }
  };
</script>
<style lang="scss">
    .indexContent{
        .block{
            width: 1200px;
            margin: auto;
            box-sizing: border-box;
            padding: 30px;
            background-color: #fff;
            text-align: left;
            border-radius: 5px;
            transition: all 0.5s ease;
            &:hover{
                box-shadow: 0 0 14px 0 rgba(0,0,0,.1);
            }
            .radio{
                margin-bottom: 20px;
                color: #000;
            }
            .el-radio__input.is-checked + .el-radio__label {
                color: #FF6600;
            }
            .el-radio__input.is-checked .el-radio__inner {
                border-color: #FF6600;
                background: #FF6600;
            }
            .line-item{
                a{
                    color: #222;
                    // display: block;
                    cursor: pointer;
                }
            }
            .line-item:hover{
                .el-timeline-item__node{
                    background-color: #0bbd87;
                }
            }
        }
    }
    
</style>

