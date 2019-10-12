<template>
    <div class="wrapper">
        <div class="imgWrapper" :class="imgScale? 'scale' : '' ">
            <img :src="imgUrl" alt="">
        </div>
    </div>
</template>
<script>
export default {
    props:['imgUrl','imgScale'],
}
</script>
<style lang="scss" scoped>
    .wrapper{
        padding: 20px;
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
        &:hover{
            .scale{
                img{
                    width: 105%;
                }
            }
        }
        .imgWrapper{
            overflow: hidden;
            img{
                width: 100%;
                transition: all 0.5s ease;
            }
        }
        
    }
</style>
