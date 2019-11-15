<template>
  <div id="app">
    <keep-alaive>
        <router-view/>
    </keep-alaive>
  </div>
</template>

<script>
    export default {
        name: 'app',

    }
</script>

<style lang="scss">
    body,
    p,
    ul,
    h3 {
        margin: 0;
        padding: 0;
    }
    
    a {
        text-decoration: none;
        color: #000;
    }
</style>