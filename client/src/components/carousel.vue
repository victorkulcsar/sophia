<template lang="html">

  <section class="carousel">
    <div class="row">
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic Carousel</h4>
            <b-carousel id="carousel1" controls indicators background="#ababab" :interval="4000" v-model="slide">
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Carousel With Captions</h4>
            <b-carousel id="carousel2" controls indicators background="#ababab" :interval="3000" v-model="slide">
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
                <h3>Hello world!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
                <h3>Hello world!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
                <h3>Hello world!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
                <h3>Hello world!</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Carousel Without Controls</h4>
            <b-carousel id="carousel3" background="#ababab" :interval="2500" v-model="slide">
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
              </b-carousel-slide>
              <b-carousel-slide>
                <img slot="img" src="" alt="slide image">
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'carousel'
}
</script>

<style scoped lang="scss">
</style>
