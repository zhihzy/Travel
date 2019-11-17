<template>
    <div>
        <div class="word" v-show="showWord">
            <span>{{letter}}</span>
        </div>
        <city-header/>
        <search :cityList="cityList" />
        <list :letter="letter" :cityList="cityList" :hotCities="hotCities" />
        <alphabet :cityList="cityList" @change="_letterChange" />
    </div>
</template>
<script>
    import CityHeader from './CityHeader'
    import Search from './Search'
    import List from './List'
    import Alphabet from './Alphabet'
    import axios from 'axios'
    export default {
        data() {
            return {
                hotCities: [],
                cityList: {},
                letter: '',
                showWord: false
            }
        },
        components: {
            CityHeader,
            Search,
            List,
            Alphabet
        },
        methods: {
            getCityInfo() {
                axios.get('mock/city.json').then(this.citySucc)
            },
            citySucc(res) {
                let data = res.data.data
                this.cityList = data.cities
                this.hotCities = data.hotCities
            },
            _letterChange(letter) {
                this.letter = letter
                this.showWord = true
                setTimeout(() => {
                    this.showWord = false
                }, 500)
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>
<style scoped>
.word{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9;
}
.word span {
    width: 3rem;
    height: 3rem;
    border-radius: .3rem;
    display: inline-block;
    background: rgba(0, 0, 0, .3);
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
}
</style>