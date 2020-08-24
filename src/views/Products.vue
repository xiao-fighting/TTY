<template>
  <div id="products">
      <div class="container">
        <section class="pt-5 productsBig">
          <div class="productsOne">
            <h5 class="text-center pdh4">商品分類</h5>
            <hr>
            <router-link to="/products/allProducts"><h5>◆全部商品</h5></router-link>
            <router-link to="/products/facialMask"><h5>◆面膜</h5></router-link>
            <router-link to="/products/clothes"><h5>◆上衣</h5></router-link>
            <router-link to="/products/souvenir"><h5>◆飾品 / 紀念品</h5></router-link>
            <router-link to="/products/vt"><h5>◆Victory系列</h5></router-link>
            <router-link to="/products/bags"><h5>◆背包 / 帽子</h5></router-link>
            <router-link to="/products/limited"><h5>◆限量組合包</h5></router-link>
          </div>
          <div class="productsTwo">
            <router-view></router-view>
            </div>
        </section>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#products{
  a {
    color: black !important;
  }
  .pdh4{
    font-weight: 600;
  }
}

 @media (min-width:1px) and (max-width:575px){

      .productsBig{
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        // margin-right: -15px;
        // margin-left: -15px;
        flex-direction: column;
    }

    .productsOne{
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      // display: flex;
      // display: inline;
    }

    .productsTwo{
      margin-top: 5%;
      margin-bottom: 5%;
      -ms-flex:0 0 100%;
      flex:0 0 100%;
      max-width: 100%;
    }
  }

      @media (min-width:576px) and (max-width:1900px){
      .productsBig{
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        // margin-right: -15px;
        // margin-left: -15px;
        flex-direction: row;
      }

      .productsOne{
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
      }

      .productsTwo{
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;

      }
      // .text-pink123456{
      //   padding: 2rem;
      // }
    }

</style>
