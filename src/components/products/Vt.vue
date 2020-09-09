<template>
  <div id="vt">
    <div class="container">
      <div class="row">
        <b-card class="col-12 col-md-6 col-lg-5 mb-3">
          <router-link  to='/products/vtxr' class="text-decoration-none">
            <b-card-img :src="itemone.image" class="vtimg"></b-card-img>
            <b-card-header>
              <b-card-title class="font">{{itemone.text}}</b-card-title>
              <div class="font2">
                <b-card-text class="font3 mr-1"><del>{{itemone.price}}</del></b-card-text>
                <b-card-text>{{itemone.discountPrice}}</b-card-text>
              </div>
            </b-card-header>

            <!-- <b-button variant="outline-info" @click="addCart(data)">
              <font-awesome-icon :icon="['fas', 'cart-arrow-down']"></font-awesome-icon>
            </b-button> -->
          </router-link>
        </b-card>
        <b-card class="col-12 col-md-6 col-lg-5 mb-3">
          <router-link to='/products/vtf' class="text-decoration-none">
            <b-card-img :src="itemtwo.image" class="vtimg"></b-card-img>
            <b-card-header>
              <b-card-title class="font">{{itemtwo.text}}</b-card-title>
              <div class="font2">
                <b-card-text class="font3 mr-1"><del>{{itemtwo.price}}</del></b-card-text>
                <b-card-text>{{itemtwo.discountPrice}}</b-card-text>
              </div>
            </b-card-header>

            <!-- <b-button variant="outline-info" @click="addCart(data)">
              <font-awesome-icon :icon="['fas', 'cart-arrow-down']"></font-awesome-icon>
            </b-button> -->
          </router-link>
        </b-card>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      itemone:

        {
          image: 'https://shoplineimg.com/5a13bfa1d4e39596590001eb/5ee79957a8927b2b89eb7e74/800x.webp?source_format=jpg',
          text: '勝利球拍 Drive X R',
          price: 'NT$4880',
          discountPrice: 'NT$3172'
        },
      itemtwo:
        {
          image: 'https://shoplineimg.com/5a13bfa1d4e39596590001eb/5ee799bf2014030030492044/800x.webp?source_format=jpg',
          text: 'TTY 戰拍 Thruster F TK-F C',
          price: 'NT$7200',
          discountPrice: 'NT$4680'
        }

    }
  },
  methods: {
    // addCart (data) {
    //   this.$store.commit('addCart', data)
    // }
  }
}
</script>

<style lang="scss" >
#vt{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .card{
    background: transparent;
    border: none !important;

    .card-body{
      padding: 0;
      // margin: -1rem;
    }
    .card-header{
      background: #0b2637;
    }

    .font{
      font-size: 17px;
    }
    .font2{
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .font3{
      font-size: 11px;
    }
  }
}
.vtimg{
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.price{
  display: flex;
  justify-content: center;

  .card-text,button{
    margin-left: 10px;
  }
}
svg{
    font-size:20px;
    // margin-left:-6px;
    // margin-right: -6px;
  }

</style>
