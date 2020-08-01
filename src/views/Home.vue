<template>
  <div id="home">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"

    >
      <!-- <b-carousel-slide img-src="https://album20200706.herokuapp.com/file/1594368706603.jpg" -->
      <!-- ></b-carousel-slide> -->
      <b-carousel-slide img-src="http://220.128.133.15/s1090114/1595212643551.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="http://220.128.133.15/s1090114/1595212924176.jpg"></b-carousel-slide>
    </b-carousel>
    <!-- @sliding-start="onSlideStart" -->
      <!-- @sliding-end="onSlideEnd" -->
       <!-- v-model="slide" -->
  </div>
</template>
