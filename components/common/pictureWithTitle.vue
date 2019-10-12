<template>
  <div class="wrapper">
    <div class="imgWrapper">
      <img :src="bgUrl" alt="" />
      <span>{{title}}</span>
    </div>
  </div>
</template>
<script>
export default {
    props:["bgUrl","title"],
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
}
.imgWrapper {
  position: relative;
  height: 100%;
  color: #fff;
  background: #000;
  overflow: hidden;
  &:hover img{
        width: 110%;
        opacity: 1;
  }
  img {
    position: absolute;
    width: 100%;
    z-index: 0;
    left: 0;
    transition: all .5s ease;
    transition: all 0.5s;
    opacity: .7;
    
  }
  span {
    bottom: 0;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
    font-size: 15px;
    margin-top: 5px;
    padding: 0 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-height: 24px;
    height: 48px;
  }
}
</style>

