<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'app',

    }
</script>

<style>
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