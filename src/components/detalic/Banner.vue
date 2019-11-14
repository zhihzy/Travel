<template>
    <div class="banner">
        <div class="banner-img">
            <span class="iconfont">&#xe601;</span>
            <img src="http://img1.qunarzz.com/sight/p0/201301/16/4593d3d5a27f445b93835fbb.jpg_600x330_a93d04ea.jpg"/>
        </div>
    </div>
</template>
<script>
    export default {
        name: "banner"
    }
</script>
<style lang="scss" scoped>
    .banner-img {
        overflow: hidden;
        height: 0;
        top: 0;
        left: 0;
        width: 100%;
        position: relative;
        padding-bottom: 55%;
    }

    .banner-img>img {
        width: 100%;
        position: absolute;
    }
</style>