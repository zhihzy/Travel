<template>
    <div class="header">
        <router-link to="/" class="iconfont header-back" >&#xe601;</router-link>
        城市选择
    </div>
</template>
<script>
    export default {
        name: 'cityHeader'
    }
</script>
<style lang="scss" scoped>
    
    
    .header {
        overflow: hidden;
        height: 2rem;
        background: #00bcd4;
        color: #fff;
        text-align: center;
        line-height: 2rem;
        .header-back {
            position: absolute;
            left: .4rem;
            color: #fff;
            text-decoration: none;
        }
    }
</style>