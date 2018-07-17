<template>
  <section class="container">
    <div>
      <app-logo />
      <h1 class="title">
        nuxt-forceupdate-bug-reproduce
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <button @click="forceUpdate">this.$forceUpdate from page</button>
      <button @click="$store.commit('update')">$store.commit('update') directly from page</button>
      <!--<h3>random: {{ random }}</h3>-->
      <h3>$store.state.random: {{ $store.state.random }}</h3>
      <h3>asyncDataRandom: {{ asyncDataRandom }}</h3>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    },
    methods: {
      forceUpdate: function () {
        console.log('page calls this.$forceUpdate:', this.$forceUpdate)

        this.$forceUpdate()
      }
    },
    fetch ({ store }) {
      console.log('fetch, calls store.commit(\'update\')')
      store.commit('update')
    },
    asyncData (context) {
      console.log('exec asyncData')
      return { asyncDataRandom: Math.random() }
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
