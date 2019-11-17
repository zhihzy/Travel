<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icon :iconList="iconList"></home-icon>
        <home-recommend :weekendList="weekendList" :itemList="itemList" :hotList="hotList" :topIcon="topIcon"></home-recommend>
    </div>
</template>
<script>
    import HomeHeader from './Header'
    import HomeSwiper from './Swiper'
    import HomeIcon from './Icon'
    import HomeRecommend from './Recommend'
    import axios from 'axios'
    export default {
        name: 'Home',
        components: {
            HomeSwiper,
            HomeHeader,
            HomeIcon,
            HomeRecommend
        },
        data() {
            return {
                swiperList: [],
                iconList: [],
                hotList: [],
                topIcon: [],
                itemList: [],
                weekendList: []
            }
        },
        methods: {
            getHomeIfo() {
                axios.get('mock/index.json').then(this.getHomeIfoSucc)
            },
            getHomeIfoSucc(res) {
                this.swiperList = res.data.data.swiperList
                this.iconList = res.data.data.iconList
                this.hotList = res.data.data.hotList
                this.topIcon = res.data.data.topIcon
                this.itemList = res.data.data.itemList
                this.weekendList = res.data.data.weekendList
                // window.console.log(this.hotList)
            }
        },
        mounted() {
            this.getHomeIfo()
        }
    }
</script>
<style scoped>
</style>