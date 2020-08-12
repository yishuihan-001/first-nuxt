<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey">GitHub</a>
      </div>

      <div class="s-default">
        <gh-btns-watch slug="vuejs/vue" show-count />
        <gh-btns-star slug="vuejs/vue" show-count />
        <gh-btns-fork slug="vuejs/vue" show-count />
        <gh-btns-follow user="yyx990803" show-count />
      </div>

      <div class="s-default">
        <mt-button type="danger" @click="testFn">
          danger
        </mt-button>
        <mt-switch v-model="value" />
      </div>
    </div>
  </div>
</template>

<script>
// 可以再插件中引入，亦可以在这引入
// import Vue from 'vue'
import { Toast } from 'mint-ui'
// Vue.component(Switch.name, Switch)

export default {
  layout: 'universal',
  asyncData ({ myName, userAgent }) {
    // console.log('===> argv first nuxt', myName, userAgent)
  },
  data () {
    return {
      value: true
    }
  },
  mounted () {
    setTimeout(() => {
      // console.log('===> 123')
      // Toast('===> 123')
      console.log('===> 1', this.$axios)
    }, 3000)
  },
  methods: {
    testFn () {
      // console.log('===> 1')
      Toast('===> 1')
      this.$notify({
        group: 'foo',
        title: 'Important message',
        text: 'Hello user! This is a notification!'
      })
      this.$myInjectedFunction('test')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  overflow: auto;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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

.s-default{
  overflow: hidden;
  text-align: center;
  margin: 10px;
}

</style>
