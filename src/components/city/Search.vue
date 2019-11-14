<template>
    <div class="search">
        <div><input v-model="keyword" placeholder="请输入城市名或拼音" class="search-input" /></div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item" v-for="i of list"
                    :key="i.name"
                    @click="_cityClick(i.name)"
                    >{{i.name}}</li>
                <li v-show="!this.list.length">没有搜索到匹配的城市</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    export default {
        name: 'Search',
        props: {
            cityList: Object
        },
        data() {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        watch: {
            keyword() {
                if (this.tmer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword) {
                    this.list = []
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cityList) {
                        this.cityList[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        methods: {
            _cityClick(city) {
                this.$store.commit('changeCity', city)
                this.$router.push('/')
            }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search, {
                click: true
            })
        }
    }
</script>
<style scoped>
    .search-item {
        padding: .26rem .20rem;
        border-bottom: .01rem solid #eee;
    }
    
    .search {
        padding: 0 .2rem;
        background: #00bcd4;
        padding-bottom: .2rem;
    }
    
    .search-input {
        height: 1.3rem;
        overflow: hidden;
        width: 98.2%;
        text-align: center;
        color: #666;
        outline: none;
    }
    
    .search-content {
        overflow: hidden;
        z-index: 1000;
        background: #fff;
        position: absolute;
        top: 3.8rem;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>