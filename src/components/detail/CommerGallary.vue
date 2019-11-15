<template>
    <div class="container">
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(i,k) of gallaryImgs" :key="k">
            <img class="gallary-img" :src="i">
            </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CommerGallary',
  props:{
      gallaryImgs:Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  }
}
</script>
<style scoped>
.container >>> .swiper-container{
    overflow: inherit;
}
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
}
.wrapper{
    width :100%;
    height: 0;
    padding-bottom: 100%;
}
.gallary-img{
    width: 100%;
}
.swiper-pagination{
    color: #fff;
    bottom: -3rem;
}
</style>
