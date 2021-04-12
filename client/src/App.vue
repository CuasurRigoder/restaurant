<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'App.vue'
    }
  }
}
</script>
