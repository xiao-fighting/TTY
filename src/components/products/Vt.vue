<template>
  <div id="vt">
    <div class="container">
      <div>
        <!-- <div class="col"> -->
          <router-link  to='/products/vtxr' class="text-decoration-none">
            <div class="row">
              <b-card v-for="(item, index) in items" :key="index" class="col-6 col-lg-4 vtcard">
                <!-- <b-card-title>{{item.text}}</b-card-title> -->
                <b-card-img :src="item.image" class="vtimg"></b-card-img>
                <b-card-header>
                  <b-card-title class="font">{{item.text}}</b-card-title>
                  <div class="d-flex">
                    <b-card-text class="mr-5"><del>{{item.price}}</del></b-card-text>
                    <b-card-text>{{item.discountPrice}}</b-card-text>
                  </div>
                </b-card-header>

                <!-- <b-button variant="outline-info" @click="addCart(data)">
                  <font-awesome-icon :icon="['fas', 'cart-arrow-down']"></font-awesome-icon>
                </b-button> -->
              </b-card>
            </div>
          </router-link>
        <!-- </div> -->
        <!-- <div class="col">dvcvcxv</div> -->
      </div>
    </div>
    <!-- <b-card v-for="(item, index) in items" :key="index" class="col-4">
      <b-img :src="item.image" class="w-100"></b-img>
      <b-card-text class="text-center">{{item.text}}</b-card-text>
      <div class="price">
        <b-card-text ><del>{{item.price}}</del></b-card-text>
        <b-card-text>{{item.discountPrice}}</b-card-text>
        <b-button variant="outline-info">
          <font-awesome-icon :icon="['fas', 'cart-arrow-down']"></font-awesome-icon>
        </b-button>
      </div>
    </b-card> -->
    <!-- <b-button variant="outline-info" @click="addCart(data.item)">
      <font-awesome-icon :icon="['fas', 'cart-arrow-down']"></font-awesome-icon>
    </b-button> -->
  </div>

</template>

<script>
export default {
  data () {
    return {
      items:
      [
        {
          image: 'https://shoplineimg.com/5a13bfa1d4e39596590001eb/5ee79957a8927b2b89eb7e74/800x.webp?source_format=jpg',
          text: '勝利球拍 Drive X R',
          price: 'NT$4880',
          discountPrice: 'NT$3172'
        },
        {
          image: 'https://shoplineimg.com/5a13bfa1d4e39596590001eb/5ee799bf2014030030492044/800x.webp?source_format=jpg',
          text: 'TTY 戰拍 Thruster F TK-F C',
          price: 'NT$7200',
          discountPrice: 'NT$4680'
        }
      ]
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

  // .vtcard{
  //   flex-direction: column;
  // }
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
    font-size: 25px;
  }
  }

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
