<template>
    <ul class="list">
        <li v-for="(i,k) of cityList" :key="k"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        :ref="k"
        >{{k}}</li>
    </ul>
</template>
<script>
    export default {
        name: "Alphabet",
        props: {
            cityList: Object
        },
        data() {
            return {
                touchStatus: false,
                startY: 0,
                timeer: null
            }
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop
        },
        computed: {
            letters() {
                const letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },

        methods: {
            handleLetterClick(e) {
                this.$emit('change', e.target.innerText)
            },
            handleTouchMove(e) {
                if (this.touchStatus) {
                    if (this.timeer) {
                        clearTimeout(this.timeer)
                    }
                    this.timeer = setTimeout(() => {
                        const touchY = e.touches.clientY - 40 
                        const index = Math.floor((touchY - this.startY) / 26) 
                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('change', this.letters[index])
                        }
                    }, 16)
                }
            },
            handleTouchEnd() {
                this.touchStatus = false
            }
        }
    }
</script>
<style lang="scss" scoped>
    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 0;
        top: 3.9rem;
        bottom: 0;
        width: 2rem;
        list-style: none;
        background: rgba(250, 250, 250, .3);
        margin: 0;
        padding: 0;
        z-index: 999;
        li {
            text-align: center;
            font-size: .33rem;
            line-height: 1.4rem;
        }
    }
</style>