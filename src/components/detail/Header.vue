<template>
    <div class="header">
        <router-link to="/" class="return" v-show="show">
            <span class="iconfont iconfont-back">&#xe605;</span>
        </router-link>
        <div class="mp-header" v-show="!show" :style="opacityStyle">
            <router-link to="/" class="iconfont header-back" >&#xe605;</router-link>
            东部华侨城大峡谷
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        _scroll(){
            const top=document.documentElement.scrollTop
            if(top>20){
                let opacity=top/140
                opacity=opacity>1?1:opacity
                this.opacityStyle={opacity}
                this.show=false
            }else{
                this.show=true
            }
        }
    },
    activated(){
        window.addEventListener('scroll',this._scroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this._scroll)
    }
}
</script>
<style lang="scss" scoped>
.mp-header {
        overflow: hidden;
        height: 2.75rem;
        background: #00bcd4;
        color: #fff;
        text-align: center;
        line-height: 2.75rem;
        position: fixed;
        z-index: 666;
        width: 100%;
        .header-back {
            position: absolute;
            left: .4rem;
            color: #fff;
            text-decoration: none;
        }
    }
.return{
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    position: absolute;
    background: rgba(0,0,0,.5);
    z-index: 1;
    top: .3rem;
    left: .3rem;
    line-height: 2.2rem;
    text-align: center;
    .iconfont-back{
        color: #fff;
    }
}
</style>