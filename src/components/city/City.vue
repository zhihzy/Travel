<template>
    <div>
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
                letter: ''
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
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>
<style scoped>

</style>