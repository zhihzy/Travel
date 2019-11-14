<template>
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="i of swiperList" :key='i'>
                <img :src="i"/>
            </swiper-slide>
            <div class="swiper-pagiation" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        name: 'HomeSwiper',
        props: {
            swiperList: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagiation',
                    loop: true,
                    autoplay: 3000
                },
            }
        }
    }
</script>
<style scoped>
    .swiper-pagiation {
        position: absolute;
        z-index: 1;
        width: 100%;
        text-align: center;
    }
    
    .swiper {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 26.25%;
    }
    
    img {
        width: 100%;
    }
    
    .swiper>>>.swiper-pagination-bullet-active {
        background: #fff !important;
    }
    .swiper>>>.swiper-pagination-bullet {
        width: 6px;
        height: 6px;
    }
</style>