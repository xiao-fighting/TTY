<template>
  <div id="facialMask">
    <b-card v-for="(item, index) in items" :key="index" class="col-6">
      <b-img :src="item.image" class="w-75" center></b-img>
      <b-card-text class="text-center">{{item.text}}</b-card-text>
      <div class="price">
        <b-card-text class=""><del>{{item.price}}</del></b-card-text>
        <b-card-text>{{item.discoutPrice}}</b-card-text>
      <b-button>
        <font-awesome-icon :icon="['fas', 'cart-arrow-down']" class="text-black" ></font-awesome-icon>
      </b-button>
      </div>
    </b-card>
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
          discoutPrice: 'NT$296'
        },
        {
          image: 'http://220.128.133.15/s1090114/1596245997782.jpg',
          text: 'TTY 保濕緊緻潤澤面膜 (箱)',
          price: 'NT$399',
          discoutPrice: 'NT$296'
        }
      ]
    }
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
