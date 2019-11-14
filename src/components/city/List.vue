<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <a class="city">{{city}}</a>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="city" v-for="i of hotCities" :key="i.id">
                    <a @click="_cityClick(i.name)" >{{i.name}}</a>
                </div>
            </div>
            <div class="area"  v-for="(item,k) of cityList" :key="k"
                :ref="k">
                <div class="title" v-text="k"></div>
                <div class="item-list" v-for="i of item" :key="i.name"
                    @click="_cityClick(i.name)">
                    <a class="item" v-text="i.name"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'

    export default {
        name: "List",
        props: {
            cityList: Object,
            hotCities: Array,
            letter: String,
        },
        data() {
            return {}
        },
        computed: {
            city() {
                return localStorage.city
            }
        },
        watch: {
            letter() {
                if (this.letter) {
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            }
        },
        methods: {
            _cityClick(city) {
                this.$store.commit('changeCity', city) // 将参数city传给vuex中的mutations中的changeCity函数
                this.$router.push('/') // 页面跳转 参考
            }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper, {
                click: true
            })
        }
    }
</script>
<style scoped>
    .item-list {
        border-bottom: .01rem solid #eee;
        line-height: 2rem;
    }
    
    .item {
        font-size: .86rem;
        padding-left: .32rem;
    }
    
    .list {
        overflow: hidden;
        position: absolute;
        top: 3.9rem;
        bottom: 0;
        width: 100%;
    }
    
    .city {
        display: inline-block;
        border: .06rem solid #ccc;
        padding: .22rem;
        margin: .22rem;
        font-size: .86rem;
        width: 6.1rem;
        text-align: center;
    }
    
    .title {
        background: #eee;
        font-size: .86rem;
        color: #666;
        padding: .22rem;
        padding-left: .32rem;
    }
</style>