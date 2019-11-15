<template>
    <div>
        <keep-alive><banner-header/></keep-alive>
        <banner :gallaryImgs="gallaryImgs" :sightName="sightName" :bannerImg="bannerImg" />
        <detail-list :categoryList="categoryList" />
    </div>
</template>
<script>
    import Banner from './Banner'
    import BannerHeader from './Header'
    import DetailList from './DetailList'
    import Axios from 'axios'
    export default {
        name: "Detail",
        components: {
            Banner,
            BannerHeader,
            DetailList
        },
        data() {
            return {
                categoryList:[],
                gallaryImgs:[],
                sightName:'',
                bannerImg:''
            }
        },
        methods:{
            getDetail(){
                Axios.get('mock/detail.json').then(this.getDetailSucc)
            },
            getDetailSucc(res){
                this.categoryList=res.data.data.categoryList
                this.bannerImg=res.data.data.bannerImg
                this.gallaryImgs=res.data.data.gallaryImgs
                this.sightName=res.data.data.sightName
            }
        },
        mounted(){
           this.getDetail()
        }
    }
</script>
<style scoped>

</style>