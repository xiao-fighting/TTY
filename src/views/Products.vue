<template>
  <div id="products" :style="{backgroundImage:`url('./images/bg.jpg')`}">
      <div class="container">
        <section class="d-flex pt-5">
          <div class="col-4 col-md-3">
            <h4 class="text-center pdh4">商品分類</h4>
            <hr>
            <router-link to="/products/allProducts"><h4>◆全部商品</h4></router-link>
            <router-link to="/products/facialMask"><h4>◆面膜</h4></router-link>
            <router-link to="/products/clothes"><h4>◆上衣</h4></router-link>
            <router-link to="/products/souvenir"><h4>◆飾品 / 紀念品</h4></router-link>
            <router-link to="/products/vt"><h4>◆Victory系列</h4></router-link>
            <router-link to="/products/bags"><h4>◆背包 / 帽子</h4></router-link>
            <router-link to="/products/limited"><h4>◆限量組合包</h4></router-link>
          </div>
          <div class="col-8 col-md-9">
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
</style>
