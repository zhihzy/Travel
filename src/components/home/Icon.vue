<template>
    <div class="icons">
        <swiper class="swiper" ref="mySwiper" :options="swiperOption">
            <swiper-slide v-for="(p,i) of pages" :key="i">
                <div class="icon" v-for="(i,k) of p" :key="k">
                    <div class="icon-img">
                        <img :src="i.imgUrl" />
                    </div> 
                    <p class="icon-p">{{i.title}}</p>
                </div>
        </swiper-slide>
        <div class="swiper-pagiation" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        name: 'HomeIcon',
        props: {
            iconList: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagiation',
                    autoplay: false,
                },
            }
        },
        computed: {
            pages() {
                let pages = []
                this.iconList.forEach((i, idx) => {
                    let page = Math.floor(idx / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(i)
                })
                return pages
            }
        }
    }
</script>
<style scoped>
    .swiper-pagiation {
        position: relative;
        bottom: -.3rem !important;
        width: .22rem;
    }
    
    .swiper-container {
        padding-bottom: .4rem;
    }
    
    .swiper>>>.swiper-pagination-bullet-active {
        background: rgba(0, 175, 190, .8) !important;
    }
    
    .swiper>>>.swiper-pagination-bullet {
        width: 6px;
        height: 6px;
    }
    
    .swiper-pagiation {
        position: absolute;
        z-index: 100;
        width: 100%;
        text-align: center;
    }
    
    .icons {
        overflow: hidden;
        padding-bottom: 50%;
        height: 0;
    }
    
    .icon {
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        padding-bottom: 23%;
    }
    
    .icon-p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: .3rem;
        margin: 0;
        text-align: center;
        font-size: .8rem;
    }
    
    .icon-img {
        position: absolute;
        top: .46rem;
        left: 0;
        right: 0;
        bottom: 1.4rem;
    }
    
    .icon-img img {
        display: block;
        margin: 0 auto;
        height: 100%;
    }
</style>