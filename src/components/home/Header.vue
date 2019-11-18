<template>
        <div class="header">
            <span class="iconfont header-left" >&#xe605;</span>
            <div class="header-input"><span class="iconfont">&#xe6b1;</span>请输入城市</div>
            <router-link to="city" class="header-right">{{sliceCity}}<span class="iconfont">&#xe66a;</span></router-link>
        </div>
    </template>
<script>
    export default {
        name: 'HomeHeader',
        data() {
            return {}
        },
        computed: {
            sliceCity() {
                return localStorage.city==undefined?this.$store.state.city:localStorage.city.slice(0,4)
            }
        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
    $teavel-color:#00bcd4;
    .header {
        display: flex;
        background: $teavel-color;
        color: #fff;
        line-height: 2.4rem;
        .header-left {
            width: 2rem;
            float: left;
            margin-left: .22rem;
        }
        .header-input {
            flex: 1;
            height: 1.77rem;
            margin-top: .32rem;
            padding-left: .42rem;
            margin-bottom: .32rem;
            background: #fff;
            border-radius: .3rem;
            color: #ccc;
            line-height: 1.7rem;
            font-size: .8rem;
        }
        .header-right {
            padding: 0 .53rem;
            float: right;
            text-align: center;
            color: #fff;
            text-decoration: none;
        }
    }
</style>