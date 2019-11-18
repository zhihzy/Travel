<template>
    <div>
        <keep-alive><banner-header :headerName="headerName"/></keep-alive>
        <banner :gallaryImgs="gallaryImgs" :sightName="sightName" :bannerImg="bannerImg" />
        <detail-list :categoryList="categoryList" />
        <div class="d1"></div>
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
                bannerImg:'',
                headerName:'',
                lid:''
            }
        },
        methods:{
            getLid(){
                this.lid=this.$route.params.id
            },
            getDetail(){
                Axios.get('mock/detail.json',{
                    params:{id:this.$route.params.id}
                }).then(this.getDetailSucc)
            },
            getDetailSucc(res){
                this.categoryList=res.data.data[this.lid-1].categoryList
                this.bannerImg=res.data.data[this.lid-1].bannerImg
                this.gallaryImgs=res.data.data[this.lid-1].gallaryImgs
                this.sightName=res.data.data[this.lid-1].sightName
                this.headerName=res.data.data[this.lid-1].headerName
            }
        },
        mounted(){
           this.getDetail()
           this.getLid()
        }
    }
</script>
<style scoped>
.d1{
    height: 222rem;
}
</style>