<template>
  <div id="facialMask">
    <div class="container">
      <div class="row">
        <!-- <div class="col"> -->
          <b-card v-for="(item, index) in items" :key="index">
            <!-- <b-card-title>{{item.text}}</b-card-title> -->
            <b-card-img :src="item.image" ></b-card-img>
            <b-card-text>{{item.text}}</b-card-text>
            <div class="d-flex">
              <b-card-text><del>{{item.discountPrice}}</del></b-card-text>
              <b-card-text>{{item.price}}</b-card-text>
            </div>
            <!-- <b-button variant="outline-info" @click="addCart(data)">
              <font-awesome-icon :icon="['fas', 'cart-arrow-down']"></font-awesome-icon>
            </b-button> -->
          </b-card>
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
          image: 'https://shoplineimg.com/5a13bfa1d4e39596590001eb/5c0fc1791ae08d00156b10a4/400x.webp?source_format=jpg',
          text: 'TTY 保濕緊緻潤澤面膜',
          price: 'NT$399',
          discountPrice: 'NT$296'
        },
        {
          image: 'https://raw.githubusercontent.com/xiao-fighting/images/master/mask0001.jpg?token=AOUPZQBMZLX4YXI7SYCJ3KK7FIWIU',
          text: 'TTY 保濕緊緻潤澤面膜 (箱)',
          price: 'NT$399',
          discountPrice: 'NT$296'
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

<style lang="scss" scoped>

#facialMask{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  // .card{
  //   border: 0px solid red;
  // }
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
