<template>
    <div>
        <div class="item" v-for="(i,k) of categoryList" :key="k">
            <div>{{i.title}}</div>
            <div v-if="i.children">
                <detail-list :categoryList="i.children" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailList",
    props:{
        categoryList:Array
    },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.item{
    padding: .1rem .2rem;
}
</style>