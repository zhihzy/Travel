<template>
    <div class="banner">
        <div>
            <img class="banner-img" 
            @click="_click"
            v-show="!showGallary"
            :src="bannerImg"/>
        </div>
        <div class="banner-info">
            <div class="banner-imgNumber">
                <div class="bg-imgNumber">
                    <span class="iconfont">&#xe623;</span>
                    <em>3</em>
                </div>
            </div>
            <p class="banner-title">{{sightName}}</p>
        </div>
        <fade>
            <commer-gallary 
            @close="_close"
            v-show="showGallary"
            :gallaryImgs="gallaryImgs" />
        </fade>
    </div>
</template>
<script>
    import CommerGallary from './CommerGallary'
    import Fade from './Fade'
    export default {
        name: "Banner",
        props:{
            bannerImg:String,
            sightName:String,
            gallaryImgs:Array
        },
        components:{
            CommerGallary,
            Fade
        },
        data(){
            return{
                showGallary:false
            }
        },
        methods:{
            _click(){
                this.showGallary=true
            },
            _close(){
                this.showGallary=false
            }
        }
    }
</script>
<style lang="scss" scoped>
.banner{
    overflow: hidden;
    height: 0;
    top: 0;
    left: 0;
    padding-bottom: 55%;
    position: relative;
    .banner-img {
        width: 100%
    }
    .banner-info{
        position: absolute;
        bottom: 0;
        color: #fff;
        padding-left: .7rem;
        padding-bottom: .6rem;
        .banner-imgNumber{
            font-size: .33rem;
            line-height: 1.2rem;
            width:3.6rem;
            height: 1.2rem;
            background: rgba(0,0,0,.5);
            border-radius: .7rem;
            .bg-imgNumber{
                position: relative;
                left: .9rem;
                em{
                    font-style: normal;
                    position: absolute;
                }
            }
        }
        .banner-title{
            font-size: 1.13rem;
            margin-top: .1rem;
        }
    }
}
</style>