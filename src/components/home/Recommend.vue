<template>
    <div>
        <div class="title"><img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="热门榜单"/>
            热门榜单</div>
        <ul class="recommend-ul">
            <!-- <img class="top-img" v-for="i of topIcon" :key="i" :src="i" /> -->
            <li class="item" v-for="(i,k) of hotList" :key="k">
            <router-link :to="/detalic/+11" >
                <div class="item-img">
                    <img :src="i.imgUrl" />
                </div>
                <p>{{i.title}}</p>
                <p class="¥">{{i.price}}<span>起</span></p>
            </router-link>
            </li>
        </ul>
        <div class="title"><img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢"/>
            猜你喜欢</div>
        <div class="recommend-div" v-for="(i,k) of itemList" :key="k">
            <div class="item-img"><img :src="i.imgUrl"/></div>
            <div class="div-info">
                <p class="info-title">{{i.title}}</p>
                <p class="info-comment">{{i.start}}
                    <span>{{i.comment_num}}条评论</span></p>
                <div class="info-price"><p class="¥">¥{{i.price}}<span>起</span></p><span class="span">{{i.address}}</span></div>
            </div>
        </div>
        <div class="item-probuct">
            <div class="title">&nbsp;
                周末去哪</div>
            <div v-for="(i,k) of weekendList" :key="k">
                <div class="item-probuct-img" ><img :src="i.imgUrl" /></div>
                <div class="item-probuct-info">
                    <p class="item-probuct-name">{{i.title}}</p>
                    <p class="item-probuct-desc">{{i.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeRecommend',
        props: {
            hotList: Array,
            topIcon: Array,
            itemList: Array,
            weekendList: Array
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    /* .top-img {
        width: 2.625rem;
        height: 1.25rem;
        z-index: 1;
    } */
    
    .item-probuct-info {
        padding: .24rem 6rem .4rem .4rem;
    }
    
    .item-probuct-info>.item-probuct-name {
        color: #212121;
        font-size: .9rem;
    }
    
    .item-probuct-info>.item-probuct-desc {
        color: #616161;
        font-size: .24rem;
        overflow: hidden;
        /*超出部分隐藏*/
        text-overflow: ellipsis;
        /*超出部分文字以...显示*/
        white-space: nowrap;
    }
    
    .item-probuct-img>img {
        overflow: hidden;
        padding-top: .6rem;
        width: 100%;
    }
    
    .title {
        background: #eee;
    }
    
    .title-img {
        display: inline-block;
        overflow: hidden;
        width: .9rem;
        height: .9rem;
        margin-left: .6rem;
        margin-top: .2rem;
        vertical-align: top;
    }
    
    .recommend-ul {
        display: flex;
        list-style: none;
        overflow-x: scroll;
        padding-left: .6rem;
        padding-top: .6rem;
    }
    
    .info-price {
        display: flex;
        justify-content: space-between;
    }
    
    .item-img>img {
        width: 6.25rem;
        height: 6.25rem;
        padding-left: .3rem;
    }
    
    .recommend-ul p {
        text-align: center;
        font-size: .24rem;
    }
    
    .¥ {
        color: #ff8300;
        padding-bottom: .5rem;
    }
    
    .¥>span {
        color: #616161;
    }
    
    .recommend-div {
        padding-top: .6rem;
        margin-left: .6rem;
        display: flex;
        border-bottom: 1px solid #eee;
        margin-bottom: .53rem;
    }
    
    .div-info {
        width: 66%;
        padding-left: .62rem;
    }
    
    .info-title {
        margin-top: .6rem;
    }
    
    .info-comment {
        font-size: .5rem;
        margin-top: .6rem;
    }
    
    .info-price {
        margin-top: .6rem;
        position: relative;
    }
    
    .info-price span {
        font-size: .73rem !important;
        color: #616161;
    }
    
    .info-price .span {
        position: absolute;
        bottom: .22rem;
        right: .22rem;
    }
</style>