<template>
  <v-main id="app">
    <router-view/>
    <v-row>
      <div class="dot" v-for="i in 5" :key="i" :style="getColour(i)"></div>
    </v-row>
  </v-main>
</template>

<script>
import anime from 'animejs'

export default {
  data: () => ({
    colours: ['#003C85', '#2C5197', '#005ED1', '#3F81D1', '#42526C', '#3579DC', '#4D71A3'],
    tl: null
  }),
  mounted () { this.animate() },
  methods: {
    getColour (idx) { return 'background: ' + this.colours[idx%7] },
    animate() {
      this.tl = anime.timeline({ loop: true })
      this.tl.add({
        targets: '.dot',
        translateY: [{ value: 25, duration: 250 }, { value: 0, duration: 700 }],
        rotate: { value: '1turn' },
        borderRadius: 50,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        delay: () => { return anime.random(0, 1000) },
        elasticity: 100
      })
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@600&display=swap');

  #app {
    font-family: 'Jost', sans-serif;
  }
  .row {
    justify-content: center;
  }
  .dot {
    width: 18px;
    height: 18px;
    margin: 0 5px;
  }
  .mainContainer {
    height: 75vh;
    display: flex;
    padding: 65px 25px !important;
    align-items: center;
  }
  .contentCol {
    max-width: 600px !important;
    text-align: center;
  }
  .narrowCol {
    max-width: 450px;
    display: inline-block;
    color: #003C85;
    padding: 0 10px;
  }
  .heading {
    color: #003C85;
    font-size: 50px;
    padding-top: 45px;
    padding-bottom: 20px;
    line-height: 1;
  }

</style>
